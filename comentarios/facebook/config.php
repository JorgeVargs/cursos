<?php 

require_once('Facebook/autoload.php');

$FBObject = new \Facebook\Facebook([
    'app_id'                => '838223933379447',
    'app_secret'            => '5458da4d9ca7935101c9e41664bce75c',
    // 'default_graph_version' => 'v2.10'
]);

$handler = $FBObject -> getRedirectLoginHelper();