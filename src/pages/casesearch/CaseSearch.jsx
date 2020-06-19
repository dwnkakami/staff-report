import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckBox from './CheckBox';
import KeywordSearch from './KeywordSearch';
import SelectBox from './SelectBox';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CaseSearch() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h3" component="h2">
        案件検索
        </Typography>

        <br />

      <Typography variant="h5" component="h2">
        キーワード検索
        </Typography>

        <KeywordSearch />

        <CheckBox />

        <Typography variant="h5" component="h2">
          資格
        </Typography>

        <SelectBox />

        <Typography variant="h5" component="h2">
          スキルレベル
        </Typography>

        <SelectBox />

        <Typography variant="h5" component="h2">
          期間
        </Typography>
        
        <SelectBox />

        <Typography variant="h5" component="h2">
          並び順
        </Typography>

        <SelectBox />

        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
