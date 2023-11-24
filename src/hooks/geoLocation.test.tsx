import React from "react";
import { renderHook } from "@testing-library/react";
import { useGeoLocation } from "./geoLocation";

describe("GeoLocation hook with real API", () => {
  test("It should form error state when User declined GeoLocation", () => {
    const hookData = renderHook(useGeoLocation);
    expect(hookData.result.current.failed).toBe(true);
  });
});

describe("forming state whin permissiones denied", () => {
  test("It should return proper location object if User granted permission", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 10,
              longitude: 10,
            },
          })
        )
      ),
    };
    // @ts-ignore
    navigator.geolocation = mockGeolocation;
    const hookData = renderHook(useGeoLocation);
    expect(hookData.result.current.failed).toBe(false);
    expect(hookData.result.current.longitude).toBe(10);
    expect(hookData.result.current.latitude).toBe(10);
  });
});
