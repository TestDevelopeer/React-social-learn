import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage, toggleFollowingProgress, unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSuperSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props;
        getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {getUsers, pageSize} = this.props;
        getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersContainer);