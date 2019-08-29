import * as React from 'react'
import Error from './common/Error'
const Sus = React.lazy(() => import('./common/Sus'))
interface Props { }
interface State { }
class ErrorTest extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <>
        <Error>
          <React.Suspense fallback={<div>loading</div>}>
            <Sus />
          </React.Suspense>
        </Error>
      </>
    )
  }
}

export default ErrorTest