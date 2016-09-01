import { connect } from 'react-redux';
import AppRouter from './router';
import { requestAllLessons } from '../actions/lessons_actions';

// const mapStateToProps = state => ({
//   currentUser: state.session.currentUser
// });

const mapDispatchToProps = dispatch => ({
  requestAllLessons: () => dispatch(requestAllLessons())
});



export default connect(
  null, mapDispatchToProps
)(AppRouter);
