import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditTab from "./EditTab";
import { editTab } from "./tabSlice";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

describe("EditTab", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockClear();
    (useDispatch as jest.Mock).mockClear();
    (useNavigate as jest.Mock).mockClear();
    (useParams as jest.Mock).mockClear();
  });

  test("renders the component with initial values", () => {
    // Mock useSelector and useParams
    const mockedTabs = [
      { id: "1", name: "Tab 1" },
      { id: "2", name: "Tab 2" },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockedTabs);
    (useParams as jest.Mock).mockReturnValue({ id: "1" });

    render(<EditTab />);

    // Verify that the component renders correctly
    const textField = screen.getByLabelText("TabName:") as HTMLInputElement;
    expect(textField).toBeInTheDocument();
    expect(textField.value).toBe("Tab 1");

    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();

    const backButton = screen.getByText("Back");
    expect(backButton).toBeInTheDocument();
  });

  test("updates the tab name on change", () => {
    const mockedTabs = [
      { id: "1", name: "Tab 1" },
      { id: "2", name: "Tab 2" },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockedTabs);
    (useParams as jest.Mock).mockReturnValue({ id: "1" });

    render(<EditTab />);
    const textField = screen.getByTestId("tab-element") as HTMLInputElement;

    fireEvent.change(textField, { target: { value: "Updated Tab" } });

    expect(textField.value).toBe("Updated Tab");
  });

  test("dispatches the editTab action and navigates on Edit button click", () => {
    const mockedDispatch = jest.fn();
    const mockedTabs = [
      { id: "1", name: "Tab 1" },
      { id: "2", name: "Tab 2" },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockedTabs);
    (useDispatch as jest.Mock).mockReturnValue(mockedDispatch);
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());

    render(<EditTab />);
    const editButton = screen.getByText("Edit");

    fireEvent.click(editButton);

    expect(mockedDispatch).toHaveBeenCalledWith(
      editTab({ id: "1", name: "Tab 1" })
    );

    const navigateMock = useNavigate();
    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  test("navigates on Back button click", () => {
    const navigateMock = useNavigate();
    // (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    // render(<EditTab />);
    // const backButton = screen.getByText('Back');

    // fireEvent.click(backButton);

    // expect(navigateMock).toHaveBeenCalledWith('/');
    const { getByText } = render(<EditTab />);

    const backButton = screen.getByText("Back");
    fireEvent.click(backButton);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
