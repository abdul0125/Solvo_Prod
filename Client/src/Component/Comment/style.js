import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    
  },
  smMargin: {
    marginRight: theme.spacing(15),
    marginLeft: theme.spacing(0),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));