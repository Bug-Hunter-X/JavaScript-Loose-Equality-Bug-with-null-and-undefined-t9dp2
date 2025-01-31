# JavaScript Loose Equality Bug

This repository demonstrates a subtle but common bug in JavaScript related to loose equality (==) when handling null and undefined values.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Problem

The provided function `foo` attempts to handle null and undefined values, but uses loose equality (==). This leads to unexpected behavior because null and undefined are not strictly equal but are loosely equal to each other. The code throws an error when `undefined` is passed due to attempting to access the `length` property of undefined.

## Solution

The solution involves using strict equality (===) to properly distinguish between null, undefined, and other values. This ensures that the function handles each case correctly without errors.