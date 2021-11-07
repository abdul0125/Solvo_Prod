import React from 'react';
import {
	Card, Grid, CardContent, CardHeader, CardMedia, Button, Typography,
	IconButton, Avatar
} from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
import { likeVideo,viewVideo } from '../../../api';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
// import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ShareIcon from '@material-ui/icons/Share';
// import InfoIcon from '@material-ui/icons/Info';
// import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
//import { useDispatch } from 'react-redux';
import moment from 'moment';
//import video from '../../../image/Realtime Chat Application  Socketio.mp4'
//import { useHistory } from 'react-router-dom';

//import { getPost, likePost, deletePost } from '../../../actions/posts';
import useStyles from './style';
import ReactPlayer from 'react-player';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import useEffect from "react"
import { getAllVideo } from '../../../actions/videos';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const Video = ({post}) => {
	console.log(post)
	const dispatch = useDispatch()
	const classes = useStyles();
	const email = useSelector((state=>state.authReducer.email)) 
	const Likes = () => {

		console.log(post?.likes)

		return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like {post?.likes?.length}</>;
	};



	return (
		<Card className={classes.card} raised elevation={3} style={{ background: "rgba(255, 255, 255, 0.308)" }}>

			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						N
					</Avatar>
				}
				action={
					<>
						<Grid container spacing={0} >
							<Grid item >
								<Grid container direction="column">
									<Typography variant="p" align="center" style={{ color: '#261C2C', textTransform: 
                                    "uppercase", fontWeight: "700", fontSize: "1.1em", borderBottom: "2px solid #2f4f4f",
                                     marginBottom: "0.3em" }}>{post?.tags[0]}</Typography>
									<Typography variant="p" 
                                    style={{ color: '#E0C097', letterSpacing: "2px", fontSize: "0.9em" }}>
                                       {post?.tags?.map((tag)=>`#${tag}`)}</Typography>
								</Grid>
							</Grid>
							<Grid item >
								<Button style={{ color: 'rgba(181, 19, 7)' }}><BookmarkBorderOutlinedIcon /></Button>
							</Grid>
							<Grid item >
								<Button style={{ color: 'rgba(181, 19, 7)' }}><MoreVertIcon /></Button>
							</Grid>
						</Grid>



					</>
				}


				title="Name"
				subheader='College Name'


			/>
			<div className={classes.overlay}>

				<Typography variant='body2' color="textSecondary">{moment(post?.createdAt).fromNow()}</Typography>
			</div>

			<CardContent className={classes.details}>
				<Typography variant="body1" component="p">
					{post?.message}
				</Typography>
			</CardContent>
			<Grid container>
				<Grid item xs={12}>
					<CardMedia className={classes.media} style={{ paddingLeft: "12px" }} >
						<div >
							<ReactPlayer controls width='98%' height='50%'
								url={post?.selectedFile} onPlay={()=>{
									viewVideo(post._id)
								dispatch({type:"VIEW_VIDEO",payload:{id:post._id,email:email}})
								}}/>
						</div>
					</CardMedia>
				</Grid>
			</Grid>






			<Grid container alignItems='center'  >
				<Grid item xs={2} >
					<Button style={{ color: 'rgba(181, 19, 7)', marginLeft: '17px' }} onClick={()=>{
						likeVideo(post._id)
						dispatch({type:"LIKE_VIDEO",payload:{id:post._id,email:email}})
						}}  >
						<Likes />
					</Button>
				</Grid>
				<Grid item xs={2} >
					<Button aria-label="share" style={{ color: 'rgba(181, 19, 7)' }}>
						Views {post?.views?.length}
					</Button>
				</Grid>
				<Grid item xs={1}>

				</Grid>
				<Grid item xs={6} >
					<IconButton aria-label="share" style={{ color: 'rgba(181, 19, 7)', }} justifyContent='flex-end'>
						<StarBorderOutlinedIcon />
					</IconButton>
					<IconButton aria-label="share" style={{ color: 'rgba(181, 19, 7)', }} justifyContent='flex-end'>
						<StarBorderOutlinedIcon />
					</IconButton>
					<IconButton aria-label="share" style={{ color: 'rgba(181, 19, 7)', }} justifyContent='flex-end'>
						<StarBorderOutlinedIcon />
					</IconButton>
					<IconButton aria-label="share" style={{ color: 'rgba(181, 19, 7)', }} justifyContent='flex-end'>
						<StarBorderOutlinedIcon />
					</IconButton>
					<IconButton aria-label="share" style={{ color: 'rgba(181, 19, 7)', }} justifyContent='flex-end'>
						<StarBorderOutlinedIcon />
					</IconButton>
				</Grid>




				<Grid item xs={1}>
					<IconButton aria-label="share" style={{ color: 'rgba(181, 19, 7)', }} justifyContent='flex-end'>
						<ShareIcon />
					</IconButton>
				</Grid>


			</Grid>


		</Card>

	)
};

export default Video;



