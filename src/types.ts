/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Industry {
  name: string;
  tagline: string;
  icon: string;
  points: string[];
}

export interface Service {
  title: string;
  category: string;
  description: string;
  icon?: string;
}

export interface Project {
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: string[];
  color: string;
}

export interface Leader {
  name: string;
  role: string;
  description: string;
  initials: string;
}

export interface Value {
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
  colorName: string;
}
