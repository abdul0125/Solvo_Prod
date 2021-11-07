import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card:{
      
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    input: {
        display: "none"
      },
      button: {
        color: 'blue',
        margin: '10px',
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
    search: {
      position: 'relative',
      borderRadius:'20px',
      backgroundColor:'rgb(232, 235, 234)',
      '&:hover': {
        backgroundColor: 'rgb(220, 224, 223)',
      },
      marginLeft: 0,
      width: '100%',
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: '100%',
        height: '100%',
      },
    },
  
    inputRoot: {
      color: 'rgb(33, 32, 32)',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
      [theme.breakpoints.up('sm')]: {
        width: '22ch',
        '&:focus': {
          width: '22ch',
        },
      },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      card_content: {
        padding: theme.spacing(2),
      },
      button:{
        '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',
          },
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      root_form: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },

    imgupl: {
     display: 'flex',
     flexDirection:'row',
     alignItems: 'flex-end',
    },
    buttonSubmit: {
      marginTop:20,
      marginBottom: 10,
    },
    media: {
      // height: 0,
      // paddingTop: '56.25%',
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // backgroundBlendMode: 'darken',
      height: 0,
      paddingTop: '56.25%',
    },
  }));