import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
    },
    searchField: {
        borderRadius: 15,
    },
    searchInput: {
        padding: [[9, 14]],
    },
    searchButton: {
        borderRadius: 15,
    },
}));

export default useStyles;
