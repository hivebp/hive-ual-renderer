import PropTypes from 'prop-types'
import React from 'react'
import {
  loadingElementCSS,
  loadingElementOne,
  loadingElementThree,
  loadingElementTwo,
  loadingIcon,
  loadingIconWithContainer,
} from '../../styles/loader'

/**
 * @class
 * @name UALLoadingIcon
 * @desc Component that renders a loading icon
 */
export const UALLoadingIcon = ({ withContainer }) => (
  <div style={withContainer ? loadingIconWithContainer : loadingIcon}>
    <div style={loadingElementOne} />
    <div style={loadingElementTwo} />
    <div style={loadingElementThree} />
    <style>{loadingElementCSS}</style>
  </div>
)

UALLoadingIcon.displayName = 'UALLoadingIcon'

UALLoadingIcon.defaultProps = {
  withContainer: false,
}

/**
 * @memberof UALInstallAuth
 * @name props
 * @prop {boolean} [false] withAuthenticator - authenticator from which to render an install button
 */
UALLoadingIcon.propTypes = {
  withContainer: PropTypes.bool,
}
