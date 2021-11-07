import React from "react"
import { Typography,Link } from "@material-ui/core";

export default function Copyright(Links) 
{
  return (
    <Typography variant="body2" style={{color:"#ffffff"}} paragraph>
      Copyright © 
      <Link color="inherit" className={Links.props.Links} href="https://Solvokit.com/">
        Solvokit.com
      </Link>{'  '}
      {new Date().getFullYear()}
      {'.'}
      <br/>
      All Rights Reserved
    </Typography>
  );
}