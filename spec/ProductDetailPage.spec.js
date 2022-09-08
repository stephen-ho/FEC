import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from '../client/src/components/ProductOverview/Sidebar.jsx';
import StyleIcons from '../client/src/components/ProductOverview/StyleIcons.jsx';
import ShareIcons from '../client/src/components/ProductOverview/ShareIcons.jsx';

/**
 * @jest-environment jsdom
 */
