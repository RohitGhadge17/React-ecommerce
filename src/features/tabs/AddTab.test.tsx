import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import AddTab from "./AddTab";

import { addTab } from "./tabSlice";

// Mock react-redux functions

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),

  useSelector: jest.fn(),
}));

// Mock react-router-dom functions

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock uuidv4

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

describe("AddTab", () => {
  // Mock useDispatch and useNavigate

  const dispatchMock = jest.fn();

  const navigateMock = jest.fn();

  // Mock useSelector return value

  const tabsMock: any = [];

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);

    useNavigate.mockReturnValue(navigateMock);

    useSelector.mockReturnValue(tabsMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should add a tab and navigate to "/" on submit', () => {
    const { getByTestId, getByText } = render(<AddTab />);

    const tabNameInput = screen.getByTestId("tab-element");

    const submitButton = screen.getByText("Submit");

    fireEvent.change(tabNameInput, {
      target: { value: "New Tab" },
    });

    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      addTab({
        id: "mocked-uuid",
        name: "New Tab",
      })
    );

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  test('should show an alert and navigate to "/" when maximum tabs reached', () => {
    const tabsMock = [
      { id: "tab1", name: "Tab 1" },

      { id: "tab2", name: "Tab 2" },

      { id: "tab3", name: "Tab 3" },

      { id: "tab4", name: "Tab 4" },

      { id: "tab5", name: "Tab 5" },
    ];

    const { getByTestId, getByText } = render(<AddTab />);

    const tabNameInput = screen.getByTestId("tab-element");

    const submitButton = screen.getByText("Submit");

    fireEvent.change(tabNameInput, {
      target: { value: "New Tab" },
    });

    fireEvent.click(submitButton);

    expect(alert).toHaveBeenCalledWith("You can add only 5 tabs");

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  test('should navigate to "/" on "Back" button click', () => {
    const { getByText } = render(<AddTab />);

    const backButton = screen.getByText("Back");

    fireEvent.click(backButton);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
