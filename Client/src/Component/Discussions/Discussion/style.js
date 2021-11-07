import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    // height: 0,
    // paddingTop: '56.25%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
    height: 0,
    paddingTop: '56.25%',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop:'12px',
    height: 'max-content',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '63px',
    left: '90px',
    color: 'black',
  },
  overlay2: {
    position: 'relative',
    top: '9 px',
    left: '600px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent:'flex-start',
  },
  pad: {
 
    paddingLeft:'2px',
 
    
  },
}));
