// @ts-nocheck
import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { AuthUser } from '../types';
import { authService } from './service';

interface AuthContextState {
  user: AuthUser | null;
  loading: boolean;
  operationLoading: boolean;
  initialized: boolean;
}

interface AuthContextActions {
  setOperationLoading: (loading: boolean) => void;
  refreshUser: () => Promise<void>;
  setUser: (user: AuthUser | null) => void;
}

type AuthContextType = AuthContextState & AuthContextActions;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthContextState>({
    user: null,
    loading: true,
    operationLoading: false,
    initialized: false,
  });

  const updateState = (updates: Partial<AuthContextState>) => {
    setState(prevState => {
      const newState = { ...prevState, ...updates };
      return newState;
    });
  };

  const setOperationLoading = (loading: boolean) => {
    updateState({ operationLoading: loading });
  };

  const refreshUser = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      updateState({ user: currentUser });
    } catch (error) {
      console.warn('[Template:AuthProvider] Error refreshing user:', error);
    }
  };

  const setUser = (user: AuthUser | null) => {
    updateState({ user });
  };

  useEffect(() => {
    let isMounted = true;
    let authSubscription: any = null;

    const initializeAuth = async () => {

      try {
        const currentUser = await authService.getCurrentUser();

        if (isMounted) {
          updateState({
            user: currentUser,
            loading: false,
            initialized: true
          });
        }

        authSubscription = authService.onAuthStateChange((authUser) => {
          if (isMounted) {
            updateState({ user: authUser });
          }
        });

      } catch (error) {
        console.warn('[Template:AuthProvider] Auth initialization failed:', error);
        if (isMounted) {
          updateState({
            user: null,
            loading: false,
            initialized: true
          });
        }
      }
    };

    initializeAuth();

    return () => {
      isMounted = false;
      if (authSubscription?.unsubscribe) {
        authSubscription.unsubscribe();
      }
    };
  }, []); // Empty dependency array ensures single execution
  const contextValue: AuthContextType = {
    ...state,
    setOperationLoading,
    refreshUser,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuthContext Hook - internal use
export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
}