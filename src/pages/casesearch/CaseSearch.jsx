import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//import Component
import KeywordSearch from './KeywordSearch';
import SelectBox from './SelectBox';
import SearchButton from './SearchButton';
import DeleteButton from './DeleteButton';
import CheckBox2 from './CheckBox2';
import DatePickers from './DatePickers';
// import SelectBox2 from './SelectBox2';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // backgroundColor: 'lightgrey',
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

// const language = [
//   {
//     "id":1,
//     "lang":"Java",
//   },
//   {
//     "id":2,
//     "lang":"JavaScript",
//   },
//   {
//     "id":3,
//     "lang":"PHP",
//   },
//   {
//     "id":4,
//     "lang":"MySQL",
//   },
// ]

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
        <SearchButton />

        <br className={classes.end} />
        
        <Typography className={classes.left} variant="h5" component="h2">
          職種
        </Typography>
        {/* <CheckBox /> */}
        <CheckBox2 />


        <Typography className={classes.left} variant="h5" component="h2">
          資格
        </Typography>

        <SelectBox name="資格" choice="ITパスポート" choice2="Oracle Master Gold" choice3="Oracle Master Silber" />
        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          スキルレベル
        </Typography>

        {/* {language.map((data)=>( */}
        <SelectBox name="スキルレベル" 
        // key={data.length} num={data.id} 
        choice="Java" 
        choice2="C言語" 
        choice3="C#" choice4="C++" choice5="MySQL" choice6="Ruby" 
        choice7="Oracle" choice8="Python" choice9="JavaScript" 
        />
        {/* ))} */}

        {/* <SelectBox2 /> */}
        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          期間
        </Typography>
        
        {/* <SelectBox /><Typography className={classes.date} variant="body2" component="p">年</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">月</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">日</Typography> */}

        <DatePickers label="ここから" />

        <br className={classes.end} />
        <div className={classes.left}><br /></div>
        <div className={classes.other}><br /></div>
        <Typography variant="body2" component="p">～</Typography>
        <br className={classes.end} />

        <div className={classes.left}><br /></div>

        {/* <SelectBox /><Typography className={classes.date} variant="body2" component="p">年</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">月</Typography>
        <SelectBox /><Typography className={classes.date} variant="body2" component="p">日</Typography> */}

        <DatePickers label="ここまで"　/>
        
        <br className={classes.end} />

        <Typography className={classes.left} variant="h5" component="h2">
          並び順
        </Typography>

        <SelectBox name="並び順" choice="時期" choice2="スキル" choice3="職種" />
        <Typography className={classes.other} variant="body2" component="p">を基準に</Typography>
        <SelectBox name="降順" choice="昇順" choice2="降順" choice3="" />

        <br className={classes.end} />
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>

        <DeleteButton />
        <SearchButton />

      </CardContent>
    </Card>
  );
}
