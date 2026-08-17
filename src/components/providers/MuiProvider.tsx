'use client';

import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import muiTheme from '@/theme/muiTheme';

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
