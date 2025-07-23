import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, Button } from 'react-native';
import { LangProvider, useLang } from '@/core/providers/LangProvider'; 

describe('LangProvider', () => {
  it('Should provide default lang and allows updating it', () => {
    const TestComponent = () => {
      const { lang, setLang } = useLang();

      return (
        <>
          <Text testID="current-lang">{lang}</Text>
          <Button
            title="Set to af"
            onPress={() => setLang('en')}
            testID="set-lang-button"
          />
        </>
      );
    };

    const { getByTestId } = render(
      <LangProvider>
        <TestComponent />
      </LangProvider>
    );

    fireEvent.press(getByTestId('set-lang-button'));
    expect(getByTestId('current-lang').props.children).toBe('en'); 
  });

  it('Should throw error when useLang is used outside LangProvider', () => {
    const TestComponent = () => {
      useLang(); 
      return null;
    };

    const renderWithoutProvider = () => {
      render(<TestComponent />);
    };

    expect(renderWithoutProvider).toThrow('useLang must be used within LangProvider');
  });
});
