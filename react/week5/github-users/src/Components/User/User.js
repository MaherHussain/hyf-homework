import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../Header'
import { Card, Icon, Image } from "semantic-ui-react";
import * as reactBootstarp from "react-bootstrap";
export default function User() {
    const {id} = useParams();
    const [name, setName] = useState('')
    const [followers ,setFollowers]= useState('')
    const [following, setFollowing] = useState("");
    const [avatar, setAvatar] = useState('')
    const [created, setCreated] = useState("");
    const [loading, setLoading] = useState(false)
    
    const fetchUserData = ()=> {
      setLoading(true);
    
        fetch(`https://api.github.com/user/${id}`)
        .then(res => res.json())
        .then(result => {

        setFollowers(result.followers);
        setAvatar(result.avatar_url);
        setFollowing(result.following);
        setName(result.login)
        setCreated(result.created_at);
        
        })
        setLoading(false);
    }
    const dateFormat = new Date(created).toDateString()

    useEffect(()=> {
      fetchUserData();
    },[id])
    return (
      <div>
        <Header />
        <div className="container ">
          <div className="row wrapper">
            {loading ? (
              <div className="user-spinner">
                <reactBootstarp.Spinner
                  animation="border"
                  role="status"
                ></reactBootstarp.Spinner>
                <div>loading.....</div>
              </div>
            ) : (
              <Card>
                <Image src={avatar} wrapped ui={false} alt={name} />
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined {dateFormat}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    {followers} followers
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    {following} following
                  </a>
                </Card.Content>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
}
