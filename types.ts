import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatData {
  label: string;
  value: string | number;
  icon?: React.ElementType;
}

export interface ChartDataPoint {
  name: string;
  visitors: number;
}