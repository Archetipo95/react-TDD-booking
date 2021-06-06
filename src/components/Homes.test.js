import {
  act,
  render,
  getAllByTestId,
  getNodeText,
} from "@testing-library/react";
import React from "react";
import Homes from "./Homes";
import apiClient from "./../services/apiClient";
import bookingDialogService from "./../services/bookingDialogService";

let container = null;

beforeEach(async () => {
  jest.spyOn(apiClient, "getHomes").mockImplementation(async () => {
    return Promise.resolve([
      {
        title: "Test home 1",
        image: "listing.jpg",
        location: "Test location 1",
        price: "1",
      },
      {
        title: "Test home 2",
        image: "listing.jpg",
        location: "Test location 2",
        price: "2",
      },
      {
        title: "Test home 3",
        image: "listing.jpg",
        location: "Test location 3",
        price: "3",
      },
    ]);
  });
  container = render(<Homes />).container;

  await act(async () => {});
});

it("should show the home", () => {
  const homes = getAllByTestId(container, "home");

  expect(homes.length).toBeGreaterThan(0);
});

it("should show the title", () => {
  const homeTitles = getAllByTestId(container, "home-title");

  expect(getNodeText(homeTitles[0])).toBe("Test home 1");
});

it("should show the image", () => {
  const homeImages = getAllByTestId(container, "home-image");

  expect(homeImages[0]).toBeTruthy();
});

it("should show the location", () => {
  const homeLocations = getAllByTestId(container, "home-location");

  expect(getNodeText(homeLocations[0])).toBe("Test location 1");
});

it("should show the price", () => {
  const homePrices = getAllByTestId(container, "home-price");

  expect(getNodeText(homePrices[0])).toBe("$1/night");
});

it("should show home booking button", () => {
  const homeBookingBtn = getAllByTestId(container, "home-booking-btn");

  expect(homeBookingBtn[0]).toBeTruthy();
});

it("should open home booking dialog", () => {
  jest.spyOn(bookingDialogService, "open").mockImplementation(() => {});
  const homeBookingBtn = getAllByTestId(container, "home-booking-btn");

  homeBookingBtn[0].click();

  expect(bookingDialogService.open).toHaveBeenCalledWith({
    title: "Test home 1",
    image: "listing.jpg",
    location: "Test location 1",
    price: "1",
  });
});
