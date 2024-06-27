import { AuthProvider, AuthProviderProps, useAuth } from 'react-oidc-context';
import { BrowserRouter } from 'react-router-dom';

import { authedRoutes, noneAuthedRoutes } from '@/route';

function App() {
  const oidcConfig: AuthProviderProps = {
    authority: 'http://localhost:18099',
    client_id: 'pkce-message-client',
    redirect_uri: window.location.origin + '/callback',
    response_type: 'code',
    scope: 'openid',
    post_logout_redirect_uri: 'http://localhost:8999/',
    response_mode: 'query',
  };

  const AuthGuard = () => {
    const auth = useAuth();
    if (auth.isLoading) {
      return <>loading</>;
    }
    if (!auth.isAuthenticated) {
      return <BrowserRouter>{noneAuthedRoutes}</BrowserRouter>;
    }
    if (auth.error) {
      return <div>{auth.error.message}</div>;
    }
    return <BrowserRouter>{authedRoutes}</BrowserRouter>;
  };

  return (
    <AuthProvider {...oidcConfig}>
      <AuthGuard />
    </AuthProvider>
  );
}

export default App;
