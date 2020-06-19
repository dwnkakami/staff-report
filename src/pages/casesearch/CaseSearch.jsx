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
import SearchButton from './SearchButton';
import DeleteButton from './DeleteButton';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'lightgrey',
  },
  left: {
    width:160,
    float:'left',
  },
  date: {
    width:30,
    float:'left',
  },
other: {
    width:70,
    float:'left',
  },
end: {
    width:'100%',
    clear:'both',
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

        <br className={classes.end}/>

      <Typography className={classes.left} variant="h5" component="h2">
        キーワード検索
        </Typography>

        <KeywordSearch />

        <br className={classes.end} />
        

        <CheckBox />

        <Typography className={classes.left} variant="h5" component="h2">
          資格
        </Typography>

        <SelectBox />
        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          スキルレベル
        </Typography>

        <SelectBox />
        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          期間
        </Typography>
        
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">年</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">月</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">日</Typography>

        <br className={classes.end} />
        <Typography variant="body2" component="p">～</Typography>
        <br className={classes.end} />

        <div className={classes.left} />

        <SelectBox /><Typography className={classes.date} variant="body2" component="p">年</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">月</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">日</Typography>

        <br className={classes.end} />

        <Typography className={classes.left} variant="h5" component="h2">
          並び順
        </Typography>

        <SelectBox /><Typography className={classes.other} variant="body2" component="p">を基準に</Typography>
        <SelectBox />

        <br className={classes.end} />

        <DeleteButton />
        <SearchButton />

      </CardContent>
    </Card>
  );
}
