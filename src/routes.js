import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './App'
import WebWhatsapp from 'views/web-whatsapp'

const Routes = () => {
  return (
    <Switch>
      <App>
        <Route path="/">
          <WebWhatsapp />
        </Route>
      </App>
    </Switch>
  )
}

export default Routes
