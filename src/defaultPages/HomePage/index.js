import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { wrapperStyle, titleStyle, subTitleStyle, componentStyle, boxStyle, titleWrapperStyle, thumbnailWrapperStyle, componentTitleStyle, UIComponentStyle, descWrapperStyle, linkWrapperStyle, linkStyle, logoutBtn } from "./style";

import * as actions from "../../store/action";

import CometChatUI from "./resources/CometChatUI.png";
import Component from "./resources/components.png";
import listComponent from "./resources/wall.png";

class HomePage extends React.Component {
	render() {
		let authRedirect = null;
		if (!this.props.isLoggedIn) {
			authRedirect = <Redirect to="/login" />;
		}

		return (
			<div css={wrapperStyle()}>
				{authRedirect}
				<p css={titleStyle()}>Click <strong>"Launch" </strong>to Continue to join Communities, and live happenings..</p>
				<p css={subTitleStyle()}>Please be respectful in the community.</p>

				<div css={UIComponentStyle()}>
					<div css={boxStyle()}>
						<div css={titleWrapperStyle()}>
							<div css={thumbnailWrapperStyle}>
								<img src={CometChatUI} alt="CometChatUI" />
							</div>
							<h2 css={componentTitleStyle()}>Yog Wellness Community</h2>
						</div>
						<div css={descWrapperStyle()}>
							<p>
								Daily Motivation, Tips and Live Happenings. Join the community to stay connected with the Yog Wellness Community.
							</p>
						</div>
						<ul css={linkWrapperStyle()}>
							<li>
								<Link css={linkStyle()} to="/embedded-app">
									<button>Launch</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>

			
				<div css={logoutBtn()}>
					<button type="button" onClick={this.props.onLogout}>
						Logout
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		error: state.error,
		isLoggedIn: state.isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
