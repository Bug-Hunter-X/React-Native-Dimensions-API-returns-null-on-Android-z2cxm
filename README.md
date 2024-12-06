# React Native Dimensions API Returns Null on Android

This repository demonstrates a common error encountered when using the `Dimensions` API in React Native on Android. The problem arises because the `Dimensions` API provides dimensions asynchronously, and attempting to access them immediately results in `null` or `undefined` values. This can lead to app crashes.

## How to Reproduce

1. Clone the repository.
2. Run the app on an Android emulator or device.
3. Observe the error message in the console (if you have not fixed the bug). 
4. The solution shows how to correctly handle the asynchronous nature of the Dimensions API.

## Solution

The provided `DimensionsBugSolution.js` file demonstrates the proper way to handle this asynchronous behavior using either the `useEffect` hook and the `Dimensions.addEventListener` method, or by waiting for the dimensions to become available.
