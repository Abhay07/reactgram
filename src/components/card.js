import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/QuestionAnswer';

import posts from '../data/posts';

const styles = theme => ({
    root: {
        display:'flex',
        flexWrap:'wrap',
        maxWidth:1200,
        margin:'auto'
    },
    card: {
        maxWidth: 345,
        flexGrow:1,
        margin: theme.spacing.unit*2,
        border:'1px solid #edeeed',
        background:'#fff',
        boxShadow: '0 0 0 5px rgba(0,0,0,0.03)',
      },
      media: {
        width:'345px',
        paddingTop: '95%',
    },
    button: {
        margin: theme.spacing.unit*2,
        paddingLeft: theme.spacing.unit*6,
        paddingRight: theme.spacing.unit*6,
        border: '1px solid rgba(182, 185, 199, 0.5)',
        color:'#5e47e0',
    },
});

class Grids extends Component {
    constructor(){
        super()
        this.state = {
            clicks:posts.likes,
        }
    }
    clickHandler = () => {
        this.setState({ clicks : this.state.clicks + 1})
        console.log(this.state.clicks)
    } 
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {
                posts.map((data, index) => {
                    return (
                        <Card className={classes.card} key={index}>
                            <CardMedia
                                className={classes.media}
                                image={data.display_src}
                                title="Media"
                            />
                            <CardContent>
                                <Typography component="p">{data.caption}</Typography>
                            </CardContent>
                            <Button variant="outlined" color="primary" className={classes.button} onClick={this.clickHandler}>
                                {data.likes}
                                <FavoriteIcon />
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.button}>
                                <CommentIcon />
                            </Button>
                        </Card>
                        )
                    })
                }
            </div>
        );
    }
}

Grids.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grids);