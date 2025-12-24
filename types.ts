import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface FeatureCard {
  title: string;
  description: string;
  imageColor: string;
  imageContent: React.ReactNode;
  span?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  content: string;
  platform: 'twitter' | 'facebook' | 'other';
  avatarColor: string;
}

export interface FloatingWidgetProps {
  className: string;
  rotation?: string;
  children: React.ReactNode;
  bgClass: string;
}