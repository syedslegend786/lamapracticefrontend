import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate } from 'react-router'

const HOC = ({ element: Element, ...rest }) => {
    const { auth } = useSelector(state => state)
    return (<Route {...rest}
        render={(props) =>
            !auth.authenticate ? <Element {...rest} /> : <Navigate to="/" />
        }
    />
    )
}
export default HOC;