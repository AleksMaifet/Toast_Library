import React from 'react';

import { ERROR_TITLE } from '@/constants';

import { ErrorContainer, ErrorText } from './styles';
import { types } from './types';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <ErrorContainer>
          <ErrorText>{ERROR_TITLE}</ErrorText>
        </ErrorContainer>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = types;
