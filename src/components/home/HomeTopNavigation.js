import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';

// import dzubaAvatar from '../../assets/images/dzuba.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: `0 ${theme.spacing.unit}px`,
  },
  avatar: {
    marginRight: 'auto',
    width: 60,
    height: 60,
  },
  settings: {
    marginLeft: 'auto'
  }
});

function HomeTopNavigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Avatar
        alt="Artem Dzyuba"
        src="/static/media/dzuba.7e1adf34.jpg"
        className={classes.avatar}
      />
      <Avatar className={classes.settings}>
        <SettingsIcon />
      </Avatar>
    </div>
  );
}

HomeTopNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTopNavigation);
