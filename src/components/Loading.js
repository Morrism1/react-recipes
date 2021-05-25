import { Loader } from '@mantine/core';
import React from 'react';

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <Loader />
      </div>
    </div>
  );
}
