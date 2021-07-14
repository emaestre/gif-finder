import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    titleGrid: {
        marginBottom: theme.spacing(3),
    },
    favoriteIcon: {
        color: red[500],
    },
    link: {
        textDecoration: 'none',
    },
    backButton: {
        marginTop: theme.spacing(),
        borderRadius: 15,
    },
}));

export default useStyles;
