import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Button from '@material-ui/core/Button';
import { listItems } from './List'
import Header from '../../common/Header'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    marginRight: 'auto'
  }
});

class Templates extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header>Шаблоны</Header>
        {listItems}
        <Button>
          <PlaylistAddIcon style={{fontSize: 50}} />
        </Button>
      </div>
    );
  }
}

Templates.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Templates);