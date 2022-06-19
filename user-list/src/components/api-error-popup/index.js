// // @flow
// import React from 'react'
// import { connect } from 'react-redux'
// import { SIGN_IN_PATH, AUTHORIZATION_ERROR_MESSAGE } from 'consts'
// import { removeApiErrorMessage } from 'reduxStore/globals'
// import Popup from 'library/popup'
// import { openUrl } from 'utils'
// import { getGlobalApiErrorMessage } from 'reduxStore/globals/selectors'
// import type { Props } from './types'
// import * as Styled from './styled'

// const ApiErrorPopup = ({
//     errorMessage,
//     removeApiErrorMessage
// }: Props): React$Node => {
//     const closeErrorPopup = () => {
//         removeApiErrorMessage()
//         if (errorMessage === AUTHORIZATION_ERROR_MESSAGE) {
//             openUrl(SIGN_IN_PATH, false)
//         }
//     }

//     return (
//         <Popup onClose={closeErrorPopup} isOpen={!!errorMessage}>
//             <Styled.ApiErrorContainer>
//                 <Styled.Icon
//                     type="warning"
//                     size="large"
//                     iconProps={{
//                         name: 'close',
//                         size: 'huge'
//                     }}
//                 />
//                 <Styled.Title
//                     size="large"
//                     color="secondaryDark"
//                     align="center"
//                     lineHeight={1.6}
//                 >
//                     {errorMessage}
//                 </Styled.Title>
//             </Styled.ApiErrorContainer>
//         </Popup>
//     )
// }
// const mapStateToProps = (state: TStore) => ({
//     errorMessage: getGlobalApiErrorMessage(state)
// })

// export default connect(mapStateToProps, {
//     removeApiErrorMessage
// })(ApiErrorPopup)
