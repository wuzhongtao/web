





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-7db951ed87f8f6cbd3a9e89c294e300cf23c1a83ad7ae64c70b8f99b21031340.css" integrity="sha256-fblR7Yf49svTqeicKU4wDPI8GoOteuZMcLj5myEDE0A=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-7b4e17697260b0150413dc0cb251639730e0ff52161f1acbe15e4e90e59b6351.css" integrity="sha256-e04XaXJgsBUEE9wMslFjlzDg/1IWHxrL4V5OkOWbY1E=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>web/zigbee_networking_layer.md at master · wuzhongtao/web</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/28773505?v=4&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="wuzhongtao/web" property="og:title" /><meta content="https://github.com/wuzhongtao/web" property="og:url" /><meta content="web test" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjAxOTQ1NTkwOjlmOGYwMDkyNDdhMmFlYjVmODU0MzgxMmY1ZWU2ZDlkMWY1Nzg0MmE5MDYxYWJjMzg0MTIzMDNiMDk3OWZiZGM=--6c504f6f9f55e7eb3320458d601035f996b14aa8">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="C893:2BD83:7F5C92:C172CC:59A82768" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="C893:2BD83:7F5C92:C172CC:59A82768" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="28773505" name="octolytics-actor-id" /><meta content="wuzhongtao" name="octolytics-actor-login" /><meta content="c132731606c5b60778066d6b852980c18a1db3cf8acc1e831a7a297d4a9c620b" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="wuzhongtao">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NTMxNzdhMjVjY2NjYzkxMjUzNTQ5YTE0MTc4Y2E4ZmU4Nzk1MWNmYjk3MWY1NGNlZWUxMGYyYzNkMTFjMjk2M3x7InJlbW90ZV9hZGRyZXNzIjoiMTgzLjE1LjE4My4xNzgiLCJyZXF1ZXN0X2lkIjoiQzg5MzoyQkQ4Mzo3RjVDOTI6QzE3MkNDOjU5QTgyNzY4IiwidGltZXN0YW1wIjoxNTA0MTkyMzYzLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER">

  <meta name="html-safe-nonce" content="dc7d9955c763d0a5a5474fb42266ab001a22b7d0">

  <meta http-equiv="x-pjax-version" content="6ce42d2e2fa6ec62762f8b0b7106bb52">
  

      <link href="https://github.com/wuzhongtao/web/commits/master.atom" rel="alternate" title="Recent Commits to web:master" type="application/atom+xml">

  <meta name="description" content="web test">
  <meta name="go-import" content="github.com/wuzhongtao/web git https://github.com/wuzhongtao/web.git">

  <meta content="28773505" name="octolytics-dimension-user_id" /><meta content="wuzhongtao" name="octolytics-dimension-user_login" /><meta content="95898809" name="octolytics-dimension-repository_id" /><meta content="wuzhongtao/web" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="95898809" name="octolytics-dimension-repository_network_root_id" /><meta content="wuzhongtao/web" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/wuzhongtao/web/blob/master/zigbee_networking_layer.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex px-3 flex-justify-between container-lg">
    <div class="d-flex flex-justify-between">
      <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/wuzhongtao/web/search" class="js-site-search-form" data-scoped-search-url="/wuzhongtao/web/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/wuzhongtao/web/blob/master/zigbee_networking_layer.md" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
                Pull requests
</a>            </li>
            <li>
              <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
                Issues
</a>            </li>
                <li>
                  <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown js-menu-container">
    <span class="d-inline-block  px-2">
      

    </span>
  </li>

  <li class="dropdown js-menu-container">
    <a class="HeaderNavlink tooltipped tooltipped-s js-menu-target d-flex px-2 flex-items-center" href="/new"
       aria-label="Create new…"
       aria-expanded="false"
       aria-haspopup="true"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret mt-1"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="wuzhongtao/web">This repository</span>
  </div>
    <a class="dropdown-item" href="/wuzhongtao/web/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="dropdown js-menu-container">

    <details class="dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@wuzhongtao" class="avatar" src="https://avatars2.githubusercontent.com/u/28773505?v=4&amp;s=40" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">wuzhongtao</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/wuzhongtao" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/wuzhongtao?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your Gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lQpQRQwG9BY508KVLAAj+Vnutc1pkY1Kcc05jRO6uTcraFWznnbkWQIkKf9p4qMnGnejk/ueQCqmt7iZit4Fiw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ii+guru1gME4oU1Aj8y0PE+jfIDwvKdVPeVm9o67WYqcTaVMKcWQjgNWpirKLjTiDDpq3mKzajXqn+fiF9/lNg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      





    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MK8piP+L3psVMK0M5kb7KqCHe7kc+n/TXhNzE0FC6ZE9tyVqUpDY5OZu1Ut7WSsXlmat1lm8H9P7WWMZTnlUhw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="95898809" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/wuzhongtao/web/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/wuzhongtao/web/watchers"
              aria-label="0 users are watching this repository">
              0
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/wuzhongtao/web/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gZ/k73WPZ9QEnOkTYO4ESNbF6D9CEy7okewRfmAaeqLKQC8ZWAaEX/UwlEco6qJa567/2LmWxOC8S2dO9n8wzA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar wuzhongtao/web"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/wuzhongtao/web/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/wuzhongtao/web/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0ZRUNh7aVe+3U+P1GHw5J0JgKvbaDcr2CFSZQ7m1H36XrIu0FU8nKsulvHzNRtcTjoahe4oHvMkb1Tii1mR0sw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star wuzhongtao/web"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/wuzhongtao/web/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/wuzhongtao/web/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vT1T/R4gkYybgdvJhbBGGtza6aRIvmj2rkjeDNrC+hcpP1sEUwBNqDAT0XaZu7b8sXhSjZLBAVYzLC7e2slOEg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of wuzhongtao/web to your account"
                aria-label="Fork your own copy of wuzhongtao/web to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/wuzhongtao/web/network" class="social-count"
       aria-label="0 users forked this repository">
      0
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/wuzhongtao" class="url fn" rel="author">wuzhongtao</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/wuzhongtao/web" data-pjax="#js-repo-pjax-container">web</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/wuzhongtao/web" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /wuzhongtao/web" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/wuzhongtao/web/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /wuzhongtao/web/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/wuzhongtao/web/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /wuzhongtao/web/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/wuzhongtao/web/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /wuzhongtao/web/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/wuzhongtao/web/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /wuzhongtao/web/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
      <a href="/wuzhongtao/web/settings" class="js-selected-navigation-item reponav-item" data-selected-links="repo_settings repo_branch_settings hooks integration_installations /wuzhongtao/web/settings">
        <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
        Settings
</a>
    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
            <a class="dropdown-item" href="/wuzhongtao/web/community" data-skip-pjax>
              <svg aria-hidden="true" class="octicon octicon-heart" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11.2 3c-.52-.63-1.25-.95-2.2-1-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-.95.05-1.69.38-2.2 1-.52.61-.78 1.28-.8 2 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.02-.72-.28-1.39-.8-2.02V3z"/></svg>
              <span itemprop="name">Community</span>
            </a>
          <a class="dropdown-item" href="/wuzhongtao/web/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/wuzhongtao/web/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/wuzhongtao/web/blob/c1caf7c908887f4f311d8e03ea4de1702b0530f7/zigbee_networking_layer.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:4eee2afbe9ac2e1e80cec9234b263726 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/wuzhongtao/web/blob/master/zigbee_networking_layer.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/wuzhongtao/web/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mYuGHCoY7oqiyOSdF+L2ZB4hZnSpg0H7tJVBw8UEyjgK/OD3mYvoV5pKfWQnXGDlbOs5pBG+lPS1j9VNetsTbg==" /></div>
          <svg aria-hidden="true" class="octicon octicon-git-branch select-menu-item-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master">
            <input type="hidden" name="path" id="path" value="zigbee_networking_layer.md">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/wuzhongtao/web/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/wuzhongtao/web"><span>web</span></a></span></span><span class="separator">/</span><strong class="final-path">zigbee_networking_layer.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/wuzhongtao/web/commit/c1caf7c908887f4f311d8e03ea4de1702b0530f7" data-pjax>
          c1caf7c
        </a>
        <relative-time datetime="2017-08-31T14:47:49Z">Aug 31, 2017</relative-time>
      </span>
      <div>
        <img alt="@wuzhongtao" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/28773505?v=4&amp;s=40" width="20" />
        <a href="/wuzhongtao" class="user-mention" rel="author">wuzhongtao</a>
          <a href="/wuzhongtao/web/commit/c1caf7c908887f4f311d8e03ea4de1702b0530f7" class="message" data-pjax="true" title="update date tiem">update date tiem</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@wuzhongtao" height="24" src="https://avatars0.githubusercontent.com/u/28773505?v=4&amp;s=48" width="24" />
            <a href="/wuzhongtao">wuzhongtao</a>
          </li>
      </ul>
    </div>
  </div>

  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/wuzhongtao/web/raw/master/zigbee_networking_layer.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/wuzhongtao/web/blame/master/zigbee_networking_layer.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/wuzhongtao/web/commits/master/zigbee_networking_layer.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/wuzhongtao/web/edit/master/zigbee_networking_layer.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Fy4KStQjt+R+PuMTE5BMGXaAJwCgGECon+mHrHRLQnJns+JpscwTBUr+YLl7biDOVdGtZqRomHfWV7ZCOFRZbg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/wuzhongtao/web/delete/master/zigbee_networking_layer.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rwgansN+TCLSSDqRLWW+zTiUSUb6TCuwuwxd+b8FfjcOviR4Z+uJ58RVViOMV71bcy7wxccSC3KBeNz/gQZHTg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      778 lines (604 sloc)
      <span class="file-info-divider"></span>
    68.1 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><p>Title: ZigBee 网络层详解
Date: 2015-10-21 09:36
Modified: 2017-08-31 09:36
Slug: zigbee-networking-layer
Tags: zigbee
Authors: Joey Huang
Summary: ZigBee 网络层详解
Status: draft</p>
<h1><a id="user-content-zigbee-网络层详解" class="anchor" href="#zigbee-网络层详解" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ZigBee 网络层详解</h1>
<p>[TOC]</p>
<h2><a id="user-content-zigbee-和-ieee-802154" class="anchor" href="#zigbee-和-ieee-802154" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ZigBee 和 IEEE 802.15.4</h2>
<p>ZigBee 和 IEEE 802.15.4 经常被混用，但实际上他们是完全不同的概念。IEEE 802.15.4 是由 <a href="http://www.ieee.org">IEEE</a> 组织制定和维护的。它定义了小区域低功耗的无线通信的<strong>物理层 (PHY)</strong> 和**媒体访问层 (MAC)**的规范。IEEE 802.15.4 定义了如下的规范：</p>
<ul>
<li>网络发现机制</li>
<li>组网和加入网络的机制</li>
<li>改变通信信道的机制</li>
<li>在特定信道上检测干扰和噪声的机制</li>
<li><strong>需要确认</strong>的，<strong>单跳</strong>的数据包传输方法。使用 CSMA-CA 来控制冲突。</li>
<li><strong>不需要确认</strong>的，单跳的数据包广播的方法。</li>
</ul>
<p>IEEE 802.15.4 没有定义<strong>多跳传输</strong>，<strong>地址分配</strong>，和<strong>应用层互操作</strong>协议。实际上，有一些其他的通信协议也基于 802.15.4 来建立，如 6LoWPAN，Tiny O/S 等。</p>
<p>Zigbee 是建立在 802.15.4 上的最主要的协议之一，它增加了网络层来支持<strong>点对点多跳网状网络</strong>，增加了安全层来处理<strong>网络安全</strong>，还增加了应用层来实现<strong>应用程序互操作</strong>。</p>
<p><a href="https://camo.githubusercontent.com/035b1a3ac7a7f16e64abdc3ae92e4f42831a19dd/687474703a2f2f6d6f6f646c652e7574632e66722f66696c652e7068702f3439382f537570706f72745765622f7265732f7a69676265652d6172636869746563747572652e706e67" target="_blank"><img src="https://camo.githubusercontent.com/035b1a3ac7a7f16e64abdc3ae92e4f42831a19dd/687474703a2f2f6d6f6f646c652e7574632e66722f66696c652e7068702f3439382f537570706f72745765622f7265732f7a69676265652d6172636869746563747572652e706e67" alt="zigbee architecture" data-canonical-src="http://moodle.utc.fr/file.php/498/SupportWeb/res/zigbee-architecture.png" style="max-width:100%;"></a>
<em>（图片来自网络，侵删）</em></p>
<ul>
<li>物理层 (PHY)：负责把数据通过 RF 频谱发送出去；或者接收来自 RF 频谱上的数据。</li>
<li>媒体访问层 (MAC)：负责组网；信道共享；可靠的单跳数据传输。</li>
</ul>
<p>PHY 和 MAC 之上的服务全部由 ZigBee 提供，包括网络层，APS，ZDO 和安全层。ZigBee 提供网状网络，多跳能力，数据传输的可靠性，并且指定应用程序互操作规范。</p>
<p>Zigbee 是异步的通信机制，它使用 MAC 层提供的 CSMA-CA (Carrier-Sense Multiple-Access with collision avoidance) 来避免冲突。</p>
<p>!!! notes "CSMA-CA 原理"
CSMA-CA 机制是由 MAC 层提供的，用来避免多个通信节点时的冲突。它的工作机制类似开会，当有一个人发言时，其他人在听。当这个人讲话过程中暂停了一段时间，这个时候其他人会试着开始讲话。有时，会导致两个人同时开始讲话，这个时候这两个人都会停下来，然后过一个随机的时间后再试着讲话。需要记住这点，在无线通信领域。<strong>在一定的通信范围内，在指定的信道上的一个指定的时间点里只能有一方在发送信号</strong>。同时需要记住，<strong>802.15.4 是半双工的通信方式，即要么在发送数据，要么在接收数据，不能同时发送和接收</strong>。</p>
<p>另一方面，ZigBee 还对 802.15.4 标准做了一定程度的修改</p>
<ul>
<li>安全性：802.15.4 定义了一种称为 CCM 的安全机制。由于 ZigBee 主要应用在性能较低的芯片上，由于性能方面的原因，ZigBee 没有完全采纳 CCM 安全机制。</li>
<li>信标超时时间：信标 (beacon) 是包含节点和网络信息的一个简单的数据包，ZigBee 使用它来发现网络。由于 ZigBee 的网络可能很密集，比如 30 个甚至更多的节点设备在同一个接收范围内，这个时候 802.15.4 规定的信标应答超时时间根本无法满足需求，因为设备太多太密集了，设备根本来不及应答。</li>
<li>通信频率：<a href="http://standards.ieee.org/getieee802/download/802.15.4-2003.pdf">802.15.4-2003</a> 在 PHY 层提供了 1G Hz 和 2.4 GHz 的通信频率，868 MHz 和 900 MHz 的通信速率被限制在 20 kbps，不超过 40 kbps。这对 ZigBee 来说速率太低了，所以 ZigBee 使用 2.4 GHz 的通信频率，速率可达到 250 kbps。<a href="http://standards.ieee.org/getieee802/download/802.15.4-2006.pdf">802.15.4-2006</a> 提出了另外一个优化的 PHY 层，能在 1 GHz 以下达到 250 kbps 的通信速率。由于 1 GHz 以下的频率穿透性比 2.4 GHz 更好。所以未来可能能看到 1 GHz 以下通信频率的 ZigBee 芯片的出现。目前 ZigBee 仍然使用 802.15.4-2003，但已经开始在讨论升级到 802.15.4-2006 。</li>
</ul>
<h2><a id="user-content-组网及入网" class="anchor" href="#组网及入网" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组网及入网</h2>
<p>一个 ZigBee 设备只有加入到一个已经存在的网络或组建一个新网络后，才能通信。只有协调器 (ZC - ZigBee Coordinator) 才能组建网络，路由器 (ZR - Router) 和 终端设备 (ZED - End-Device) 可以加入网络。</p>
<p>每个设备节点在生产时都由产商设置一个全球唯一的 64 bit MAC 地址，称为长地址，在加入网络后由协调器分析一个 16 bit 的短地址。在实际网络通讯时使用短地址，以便减少协议负载，增加应用层负载能力。</p>
<h3><a id="user-content-组网" class="anchor" href="#组网" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组网</h3>
<p>组网由协调器来执行。组网实际上是完成以下两个任务：</p>
<ul>
<li>决定唯一的网络标识，称为 PAN ID</li>
<li>在 802.15.4 规定的 16 个信道里选择一个信道来通信</li>
</ul>
<p>实际上这两个任务都是由运行在协调器上的应用程序决定的。<strong>应用程序决定什么时候来组网，使用哪个信道，使用哪个 PAN ID</strong> 。运行在协调器上的应用程序可以是多种多样的，比如连接到以太网的网关，恒温器甚至是一个灯泡。应用程序可以决定协调器一上电就组网或者等待某个按键按下再开始组网。</p>
<p><strong>协调器的职责</strong></p>
<ul>
<li>组网</li>
<li>在 802.15.4 上建立通信信道</li>
<li>建立网络的 PAN ID 和扩展 PAN ID</li>
<li>决定使用哪种协议栈类型 （编译时决定 或 运行时决定）</li>
<li>作为网络的安全中心节点</li>
<li>作为设备入网的仲裁中心，即是否允许设备入网</li>
<li>提供网络通信的路由功能</li>
<li>如果树状路由使能，将作为树状路由的根节点</li>
</ul>
<p><strong>组网的流程</strong></p>
<p><a href="/wuzhongtao/web/blob/master/images/zigbee_images-form-network.png" target="_blank"><img src="/wuzhongtao/web/raw/master/images/zigbee_images-form-network.png" alt="Form Network" style="max-width:100%;"></a></p>
<ul>
<li>发起组网：组网上由应用层发起的</li>
<li>信号强度扫描：ZigBee 会调用 MAC 的功能来扫描信号强度，以便决定使用哪个信道来通信。扫描时，会把 16 个信道 (11–26)全部扫描一遍，每个信道扫描时间大概是 0.5 秒，总共需要花费 8 秒时间。</li>
<li>活动网络扫描：由一个信标请求 (Beacon Request) 和多个信标应答组成，用来发现邻近的现有网络。活动网络扫描确保发现邻近的 ZigBee 网络，不使用已经被使用了的 PAN ID 来组网。活动网络扫描也需要足够长的时间来等待网络应答。</li>
<li>合适的信道和 PAN ID：什么是合适的信道和 PAN ID ？ ZigBee 协议栈的实现倾向于选择没被占用的通信质量最好的信道。网络标识 PAN ID 的默认值是 0xffff，意思是由 ZigBee 自动选择一个 PAN ID （一个简单的实现是直接递增，直到找到一个没被邻近的网络使用的 PAN ID 为止），应用程序也可以自己设置一个从 0x0000 到 0x3fff 的固定值来作为 PAN ID。<strong>强烈建议不要设置成固定的 PAN ID</strong>，而是让 ZigBee 随机选择一个，避免冲突。另外一个避免冲突的方法是启用 ExtendedPANID，即直接用协调器的 MAC 地址作为 PAN ID。</li>
</ul>
<h3><a id="user-content-入网" class="anchor" href="#入网" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>入网</h3>
<p>路由器和终端设备会执行入网流程。路由器一般由电源供电，终端设备一般由电池供电，正常时候进入睡眠状态，只在需要的时候唤醒来发送/接收数据，接着继续进入睡眠状态。</p>
<p><strong>路由器的功能</strong></p>
<ul>
<li>查找并加入正确的网络</li>
<li>在网络中转发广播包</li>
<li>参与路由，包括路由发现和路由信息表维护</li>
<li>允许其他设备加入网络 （可配置）</li>
<li>为睡眠的子设备保存数据包</li>
</ul>
<p><strong>终端设备的功能</strong></p>
<ul>
<li>查找并加入正确的网络</li>
<li>向父设备轮询，以便确认在睡眠期间是否有数据包发送给自己</li>
<li>当和父设备连接中断时，查找其他父设备来加入网络</li>
<li>由应用层控制，在大部分时间进入睡眠状态以便降低功耗</li>
</ul>
<p>入网的流程就是发现邻近的网络，然后选择一个加入的过程，由入网设备发起。典型地，入网设备发送信标请求 (beacon request) ，相当于大声地叫 “HEY，附近有人吗？” 邻近的协调器或路由器收到信标请求后，会发送应答 “HEY，我在这儿。”</p>
<p>信标应答由协调器或路由器发送，他们会在收到信标请求的信道上发送信标应答，一个信标请求可能会对应多个信标应答。一个信标应答会包含一些网络的基本信息：PAN ID 和扩展 PAN ID；是否允许其他设备入网；是否有空间来给入网设备加入。信标应答没有包含任何应用层的信息。所以，入网设备需要先加入网络，查找对应的应用，如果找不到，就退网，继续偿试加入其他网络。</p>
<p>来看一下典型的信标应答报文</p>
<pre lang="text"><code>Frame 3 (Length = 24 bytes)
IEEE 802.15.4
    Frame Control: 0x8000
        .... .... .... .000 = Frame Type: Beacon (0x0000)
        .... .... .... 0... = Security Enabled: Disabled
        .... .... ...0 .... = Frame Pending: No more data
        .... .... ..0. .... = Acknowledgement not required
        .... .... .0.. .... = Intra PAN: Not within the PAN
        .... ..00 0... .... = Reserved
        .... 00.. .... .... = Destination Address: not present
        ..00 .... .... .... = Reserved
        10.. .... .... .... = Source Address: 16-bit short address
    Sequence Number: 205
    Source PAN Identifier: 0x0bef
    Source Address: 0x0000
MAC Payload
    Superframe Specification: 0xcfff
        .... .... .... 1111 = Beacon Order (0x000f)
        .... .... 1111 .... = Superframe Order (0x000f)
        .... 1111 .... .... = Final CAP Slot (0x000f)
        ...0 .... .... .... = Battery Life Extension: Disabled
        ..0. .... .... .... = Reserved
        .1.. .... .... .... = PAN Coordinator: yes
        1... .... .... .... = Association Permit: enabled
    GTS Specification: 0x00
    Pending Address Specification: 0x00
Beacon Payload
Protocol ID: ZigBee NWK (0x00)
NWK Layer Information: 0x8421
    .... .... .... 0001 = Stack Profile (0x1)
    .... .... 0010 .... = nwkcProtocolVersion (0x2)
    .... ..00 .... .... = Reserved (0x0)
    .... .1.. .... .... = Router Capacity: True
    .000 0... .... .... = Device Depth (0x0)
    1... .... .... .... = End Device Capacity: True
    Extended PAN ID: 0x0050c211dc051801
</code></pre>
<p>从这个信标应答可以看到一些信息，ZigBee stack profile 是 0x01，这是一个协调器节点，目前允许其他设备入网，且足够的空间给新设备，它的 PAN ID 是 0x0bef，扩展 PAN ID 是 0x0050c211dc051801。</p>
<ul>
<li>Frame Control: 0x8000: MAC 层的 Frame Control 的值是 0x8000，这是一个信标数据包。<strong>Security Enabled 永远是 0，这是因为 ZigBee 使用网络层的安全机制，而不使用 MAC 层的安全机制</strong>。</li>
<li>Source Address: 0x0000 表示这是一个协调器，因为协调器的短地址永远是 0x0000 ，如果是其他的值代表这是路由器，终端设备不会发送信标应答。</li>
<li>Association Permit: enabled: 表示这个网络允许其他设备加入</li>
<li>Beacon Order (0x000f)：ZigBee 是个异步网络，即不支持限时送达功能。ZigBee 是个由 CSMA-CA 机制来规避冲突的异步网络。</li>
<li>End Device Capacity: True：是否有空间容纳新设备入网。<strong>针对 stack profile 01 的设备，一个节点允许其他设备作为子节点加入网络的数量限制是 20，其中 6 个路由器，14 个终端设备</strong>。</li>
</ul>
<p>!!! note "ZigBee stack profile"
ZigBee 使用 stack profile 来区分不同的协议版本号。Stack Profile 01 表示 ZigBee 2006, 2007 版本的协议。Stack Profile 02 表示 ZigBee Pro 的协议版本号。关于两个区别，详见本文最后的详细描述。另外需要注意和 Applicatioin Profile 的区别，Application Profile 是 ZigBee 联盟定义的应用层协议。比如智能家居分配的 ZigBee Profile 为 0x0104。</p>
<p>ZR 和 ZED 入网时，实际上是通过选择一个节点作为其父节点来完成的。入网的设备称为子节点，被关联的设备称为父节点。ZC 和 ZR 可以作为父节点，ZED 只能作为子节点。ZR 可以作为子节点也可以作为父节点，要根据网络拓扑结构来决定。需要特别注意，<strong>父子节点和网状网络没有任何关系，任何两个路由器都可以在信号覆盖范围内进行点对点直接通信</strong>。如果一个路由器的父节点或子节点离开网络，在网络密度足够的情况下，对网络的路由和通信没有任何影响。ZR 不会在不同的网络间路由，只会在相同的 PAN ID 和信道下执行路由功能。</p>
<p>针对 ZED 来说，父子节点关系就比较特殊。ZED 可以和网络中的其他设备通信，但只能通过其父节点，即父节点是 ZED 可以<strong>直接通信</strong>的唯一节点。当 ZED 要发送数据时，其父节点是唯一的<strong>下一跳 (next hop) 节点</strong>。所以，当 ZED 和其父节点的连接中断时，必须查找另外的 ZR 或 ZC 作为其新的父节点，以便能在网络中进行通信。这个过程称为重新入网 (rejoin)。</p>
<p><strong>入网流程</strong></p>
<p><a href="/wuzhongtao/web/blob/master/images/zigbee_images-join-network.png" target="_blank"><img src="/wuzhongtao/web/raw/master/images/zigbee_images-join-network.png" alt="Join Network" style="max-width:100%;"></a></p>
<ul>
<li>活动网络扫描：这是为了发现邻近可用的 ZigBee 网络。通过往每个信道发送信标请求来发起活动网络扫描，然后等待信标应答。每个信道默认是 0.5 秒的等待应答时间，这个时间也可以由应用层设置。当全部应答被收集起来后，由应用层通过选择 PAN ID 和信道，来选择一个网络加入。</li>
<li>鉴权流程：当活动网络扫描完成，并且选择了一个合适的网络来加入。接下来就开始鉴权流程。需要注意，当鉴权开始时，入网节点已经有了网络地址（至少是临时地址），鉴权只发生在启用了安全的网络中。鉴权给安全中心（一般是协调器兼任）允许或拒绝加入网络的权限。当鉴权没有成功时，父节点会告诉入网设备离开网络，并且收回分配给入网设备的地址。一个伪装的节点可能会有网络地址，但没有收到安全中心发送的密钥，所以无法在网络中通信。</li>
</ul>
<p>在 ZigBee Stack Profile 01 里，设备节点都<strong>尽量加入到靠近树根节点</strong> (Device Depth 的值尽量小)，这样在树形结构通信的时候，可以减少数据包中转的次数。</p>
<p>ZigBee 网络建立后，怎么样阻止或允许其他设备加入呢？一个是用安全中心 (Trust Center) 策略，安全中心可以简单地阻止其他新节点加入网络。另外一个方法是使用“允许加入”时间窗。是否允许加入网络的标志位只影响 ZC 和 ZR 。网络层通过原语 NLME-PERMIT-JOINING.request 设置是否允许设备加入的标志位。ZDP 提供了在网络中发送这个原语的机制，其参数 0xff 表示打开允许设备入网的标志，0x00 表示关闭允许设备入网标志，1 - 254 之间的值表示在指定秒数内允许设备加入。</p>
<pre><code>Seq     Time        SrcPAN      MACSrc      MACDst      Packet Type
                    DstPAN      MACDst (if 2 line)
-------------------------------------------------------------------------
1                               0xffff                  IEEE 802.15.4 Beacon Request
2       +02.780                 0xffff                  IEEE 802.15.4 Beacon Request
3       +00.003     0x0f00      0x0000                  IEEE 802.15.4 Beacon: AP: 0
4       +02.022     0xffff      00:50:c2:37:b0:04:00:02
                    0x0f00      0x0000                  Association Request
5       +00.001                                         Acknowledgment
6       +00.494                 00:50:c2:37:b0:04:00:02
                    0x0f00      0x0000                  Data Request
7       +00.001                                         Acknowledgment
8       +00.003                 00:50:c2:37:b0:04:00:01
                    0x0f00      00:50:c2:37:b0:04:00:02 Association Response
9       +00.001                                         Acknowledgment
10      +00.593                 0xffff                  IEEE 802.15.4 Beacon Request
11      +00.003     0x0f00      0x0001                  IEEE 802.15.4 Beacon: AP: 0
12      +00.006     0x0f00      0x0000                  IEEE 802.15.4 Beacon: AP: 0
13      +02.014     0xffff      00:50:c2:37:b0:04:00:03
                    0x0f00      0x0000                  Association Request
14      +00.001                                         Acknowledgment
15      +00.496                 00:50:c2:37:b0:04:00:03
                    0x0f00      0x0000                  Data Request
16      +00.001                                         Acknowledgment
17      +00.003                 00:50:c2:37:b0:04:00:01
                    0x0f00      00:50:c2:37:b0:04:00:03 Association Response
18      +00.001                                         Acknowledgment
</code></pre>
<p>这个数据包里有三个设备，ZC 的 MAC 地址是 00:50:c2:37:b0:04:00:01；ZR 的 MAC 地址是 00:50:c2:37:b0:04:00:02；ZED 的 MAC地址是 00:50:c2:37:b0:04:00:03。#1，#2 号数据包为 ZR 入网请求发出来的信标请求。#3 号数据包为 ZC 发出的信标应答，ZR 就申请成为 ZC 的子节点来加入网络。#4 号数据包就是 ZR 发送给 ZC 的关联请求。#8 号数据包为 ZC 发送给 ZR 的关联应答。接着，#10 号数据包是 ZED 发起的入网流程的信标请求，这个时候收到了两个信标应答，分别是 #11 和 #12 号数据包，他们的网络短地址分别是 0x0001 和 0x0000 即网络中的 ZC 和刚刚入网的 ZR 。#13 号数据包为 ZED 发送的关联请求，这里他申请成为 ZC 的子节点。这样就组成了一个三个节点的 ZigBee 网络。</p>
<p>当入网成功后，只要知道对方的网络短地址，网络中的节点可以直接相互通信，不需要绑定之类的额外的机制。当然，数据可以发送，应用层能不能看到还需要看双方的 Application Profile 是否一致。<strong>如果需要自定义 Application Profile 时 (比如 ZigBee 联盟没有定义的应用场景)，一个简单可行的方法是网络中所有节点个有相同的端点 (endpoint)，相每个端点都有相同的 Profile</strong>。</p>
<h3><a id="user-content-重新入网" class="anchor" href="#重新入网" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>重新入网</h3>
<p>重新入网是指一个 ZED 已经加入过网络，ZED 节点已经有了 PAN ID，扩展 PAN ID，安全密钥，和网络短地址。但由于以下的原因需要重新入网：</p>
<ul>
<li>ZED 和其父节点的通讯链路丢失了</li>
<li>ZED 设备掉电重启</li>
</ul>
<p>在实际网络通讯时，ZED 和他的父节点直接通讯。当 ZED 发现父节点没有响应时，ZED 必须查找一个新的节点当作父节点。<strong>ZED 自己决定什么时候判定自己成为孤独节点</strong>，而不是其父设备去判断。<strong>ZigBee 协议本身没有规定 ZED 要轮询几次才能确认自己成为孤儿节点，这个机制由应用程序决定。</strong></p>
<p>在 Freescale 平台，有个全局属性 gMaxFailureCounter_c 可以设置，默认是 2 。当 ZED 发送数据连续失败的次数到达设置的值时， ZED 就会发起重新入网流程。</p>
<p>重新入网流程由 ZED 发起信标请求开始，重新入网和潜在的父节点是否允许入网标记无关，只和潜在的父节点的容纳能力有关，即使潜在的父设备关闭了入网许可，只要它有空间容纳子节点，重新入网依然可以成功。当 ZED 收到信标应答后，它选择一个和自己有相同 PAN ID 的网络入网，并获得新的网络短地址。最后 ZED 发布一条通知，告诉网络它已经移动了，这样网络中的其他节点可以更新路由表。同时保留设备绑定信息。</p>
<p>比如原来网络中有三个设备，一个 ZC，ZC 下有两个子节点，一个 ZR 同时也是个开关，另外一个是 ZED 同时也是灯。ZR 开关和 ZED 灯绑定起来了，即通过 ZR 的开关可以控制 ZED 的灯。某个时间点，ZED 和 ZC 连接中断了，这个时候 ZED 发起重新入网流程，最终变成 ZR 开关的子节点。最后 ZED 发布通知，告诉网络它已经移动了，并且附有新的网络短地址。这样 ZR 和 ZED 之间的绑定信息将会被保留下来，即 ZR 开关依然可以控制 ZED 灯设备。</p>
<pre><code>Seq     Time    SrcPAN      MACSrc      MACDst      Packet Type
                DstPAN      MACDst (if 2 line)
------------------------------------------------------------------------
STEP 4
4       +02.022 0xffff      00:50:c2:37:b0:04:00:02
                0x0f00      0x0000                  IEEE:Association Request
13      +02.014 0xffff      00:50:c2:37:b0:04:00:03
                0x0f00      0x0000                  IEEE:Association Request
STEP 5
25      +05.892 0x0f00      0x0001      0x0000      ZDP:EndDeviceBindReq
29      +00.766 0x0f00      0x796f      0x0f00      ZDP:EndDeviceBindReq
35      +00.094 0x0f00      0x0000      0x0001      ZDP:BindReq
STEP 7
67      +03.989 0x0f00      0x0001      0x0000      HA:On/off:Toggle
71      +00.004 0x0f00      0x0000      0x796f      HA:On/off:Toggle
STEP 8
119     +03.003                         0xffff      IEEE:Beacon Request
120     +00.002 0x0f00      0x0001                  IEEE:Beacon: AP: 0
125     +01.006 0x0f00      0x796f      0x0001      NWK:Rejoin Request
129     +00.003 0x0f00      0x0001      0x796f      NWK:Rejoin Response
STEP 9
131     +00.005 0x0f00      0x1430      0xffff      ZDP:EndDeviceAnnce (0x796f)
150     +05.004 0x0f00      0x0001      0x1430      HA:On/off:Toggle
</code></pre>
<p>这是一个重新入网的数据包。STEP 4： 两个设备入网时都成了 ZC 的子节点。STEP 5： ZC 和 ZED 绑定起来。STEP 7： ZC 控制命令来控制 ZED ，注意这里的数据传输经过了 ZC，因为 ZED 只能和他的父节点 ZC 直接通信，ZR 要发数据时只能发给 ZC，由 ZC 再发送给 ZED。STEP 8：ZED 发起重新入网流程，#119 为重新入网的信标请求，#120 ZR (nwkAddr: 0x0001) 发回一个信标应答，这样 ZED 请求作为 ZR 子节点重新入网。STEP 9：ZR 发送命令控制 ZED 灯光，这个时候命令就没有经过 ZC 转发了。</p>
<p><strong>无痕重新入网</strong></p>
<p>另外一种重新入网是无痕的 (silent rejoin)。即在重新入网的过程中网络中没有任何的数据包交互。比如一幢大楼有 1000 个节点，大楼突然断电了，过了一会儿供电恢复后所有的路由器重新开始，直接从 NVM 里读取之前的配置信息（PAN ID，扩展 PAN ID，网络短地址，安全密钥），启动完成后就装作什么都没发生。因为如果这个时候需要发数据包入网或重新入网的话，会导致网络拥塞。</p>
<p><strong>巧用重新入网</strong></p>
<p>注意到有一个细节，重新入网和网关或协调器是否允许设备入网无关，即不管 ZC/ZR 是否允许入网，只要他有空间，就允许其他设备以重新入网的形式加入网络。利用这个机制，可以通过编程的方式把网络的 PAN ID，扩展 PAN ID，安全密钥等信息写入等入网设备。然后设备上电后以重新入网的流程来申请加入网络。</p>
<p>这一机制有时很有用。比如在智能家居 (Home Automation) 领域，设备入网时，安全中心在最后一步需要把密钥发送给新入网的设备。这暴露了一个截获密钥的时间窗口。由于在设备入网的次数较少，且时间也很短，所以在正常情况下这种系统风险的时间窗口很短，也较少出现，还是可以接受的。但如果对安全性要求非常高。那么就可以使用编程的方式把 PAN ID，扩展 PAN ID，安全密钥等信息写入设备，然后设备发起重新入网流程来入网，这样密钥就不会在网络中传输，确保了更高的安全性。</p>
<h2><a id="user-content-地址分配" class="anchor" href="#地址分配" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>地址分配</h2>
<p>ZigBee 使用两个地址来进行通信时寻址，一个是 64 bit 长地址 (IEEE or MAC Address)，另外一个是 16 bit 短地址 (NwkAddr)。长地址由设备生产商写入设备，并且在设备的生命周期内不会改变。长地址是全球唯一的。实际上，64 bit 的地址空间足够让地球上每平方米拥有 123,853 个设备。长地址由 IEEE 协会控制，设备生产商可以向 <a href="http://www.ieee.org">http://www.ieee.org</a> 购买。长地址由两部分组成，前面 24 bit 是产商码 (OUI - Organizational Unique Identifier) ，后面 40 bit 由设备生产商自己管理。</p>
<p>短地址由设备入网时由协调器分配，设备离开网络时，协调器会回收这个地址供下个入网设备使用。本节讨论的地址分配将讨论短地址的分配流程。</p>
<p>!!! note "为什么需要两套地址"
在 ZigBee 通信中，NWK 层和 MAC 层的包头都需要包含源地址和目的地址。即一个数据包需要有 4 个地址。如果用长地址来寻址，则总共需要 32 个字节来保存地址。而如果用短地址，只需要 8 个字节。这将节省 24 个字节给应用层，提高协议的数据装载量。
为什么 NWK 层和 MAC 层都需要有源地址和目的地址呢？这跟路由有关。假设有个数据包要经过多跳从 A 节点发送到 Z 节点，NWK 层的源地址和目的地址在节点间传输时保持不变，分别是 A 的地址和 Z 的地址。而 MAC 层的源地址和目的地址将随着数据包在不同节点间发送而改变，比如 A 发到 B 时，MAC 源地址是 A 的地址，目的地址是 B 的地址；B 跳到 C 时，源地址是 B ，目的地址是 C。这样一直到 Y 跳到 Z 时，源地址是 Y ，目的地址是 Z。</p>
<p>ZigBee 有两套地址分配方案：</p>
<ul>
<li>CSkip : 用在 stack profile 0x01，即 ZigBee。地址由父子节点关系来分配，最终网络将变成一个<strong>对称树</strong>。其中有一个关键指标用来标明<strong>节点深度</strong>，即从根节点 (ZC) 发送一个数据包给子节点时要经过几跳才能送达。</li>
<li>Stochastic ： 用在 stack profile 0x02，即 ZigBee Pro。一个节点入网时由节点选择自己的短地址，然后通过广播发送一个公告。以便检查是否有地址冲突，如果这个地址已经被占用，则入网节点选择另外一个节点，继续广播公告，直到选择到一个不冲突的地址为止。</li>
</ul>
<p>在 CSkip 算法里，协调器 ZC 被定义为根节点，其短地址为 0x0000，任何一个入网设备将会收到一个其父节点的关联应答 (Associate Response)，这个应答包里就包含了分配给入网节点的短地址。</p>
<pre><code>IEEE 802.15.4
    Frame Control: 0xcc63
    Sequence Number: 53
    Destination PAN Identifier: 0x0bef
    Destination Address: 0x0050c2047800fc12
    Source Address: 0x0050c211dc051801
    MAC Payload
        Command Frame Identifier = Association Response: (0x02)
            Short Address: 0x0001
            Association Status: Association Successful (0x00)
</code></pre>
<p>这个数据包就是关联应答数据包，其分配给新入网子设备的短地址是 0x0001，同时留意一下源地址和目的地址是 64 bit MAC 地址，这是因为短地址还没分配，所以这个通信必须用长地址。一旦短地址分配成功后，就可以使用短地址了。</p>
<p>CSkip 使用三个参数来决定地址分配：</p>
<ul>
<li>maxDepth: 最大深度。协调器是树根节点，其深度为 0，协调器的子节点的深度为 1，协调器的子节点的子节点的深度为 2。依此类推。</li>
<li>maxChildren: 一个父节点最多可容纳的子节点个数，只有 ZC 和 ZR 可以拥有子节点。子节点可以是 ZR 或 ZED。</li>
<li>maxRouters: 一个父节点最多可容纳的路由器子节点个数。</li>
</ul>
<p>ZigBee stack profile 0x01 使用 <strong>maxDepth=5, maxChildren=20, maxRouters=6</strong> 这组固定值。有了这些值，就可以从数学上计算出新入网设备的短地址，也可以在这些节点之间路由 (源地址，目的地址，下一跳地址)。</p>
<p>!!! note "理解 CSkip"
针对 stack profile 0x01 的 CSkip 参数。depth = 0 的节点只有 1 个，即 ZC。depth = 1 的节点最多有 20 个，其中最多只能有 6 个路由器。depth = 2 的节点最多只能有 120 (6 x 20) 个，其中最多只能有 36 (6 x 6) 个路由器。depth = 3 的节点最多只能有 720 (36 x 20) 个，其中最多只能有 216 (36 x 6) 个路由器。depth = 4 的节点最多只能有 4,320 (216 x 20) 个，其中最多只能有 1,296 (216 x 6) 个路由器。depth = 5 是最后一层，其节点最多只能有 25,920 (1296 x 20) 个，这一层再放路由器已经没有意义了，因为这一层的路由器不能有子节点。这样算下来 stack profle 01 的 CSkip 参数限制的网络规模为 31,101 (1 + 20 + 120 + 720 + 4320 + 25920) 个节点。这个数字小于 16 bit 短地址可用的总地址数。</p>
<p>根据 stack profile 0x01 的 CSkip 参数，可以算出每层节点的 CSkip 常数：</p>
<table>
<thead>
<tr>
<th>Cskip Level</th>
<th>Skip Number</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cskip level 0</td>
<td>0x143d</td>
</tr>
<tr>
<td>Cskip level 1</td>
<td>0x035d</td>
</tr>
<tr>
<td>Cskip level 2</td>
<td>0x008d</td>
</tr>
<tr>
<td>Cskip level 3</td>
<td>0x0015</td>
</tr>
<tr>
<td>Cskip level 4</td>
<td>0x0001</td>
</tr>
<tr>
<td>Cskip level 5</td>
<td>0x0000</td>
</tr></tbody></table>
<p>给定这些常数，第一个以 ZC 作为父节点加入网络的 ZR 将获得 0x0001 的 NwkAddr。第二个以 ZC 作为父节点加入网络的 ZR 将获得 0x143e (0x0001 + 0x143d) 的 NwkAddr。跳过的 0x143d 将作为其前面那个路由器下所有子设备的地址空间。第一个以 ZC 作为父节点加入网络的 ZED 的地址将接在所有的路由器之后，它的地址由下面的公式算出：</p>
<p>1 (ZC take 1 address) + 6 (maxRouter) * 0x143d (cstrip at level 0) = 0x796f</p>
<p>CSkip 算法没有在 ZigBee Pro (stack profile 02) 上使用，主要是因为 CSkip 在网络深度 (maxDepth) 方面的扩展能力太弱了。假如我们想把网络深度从 5 层扩展到 6 层，那么参数是 maxDepth=6, maxChildren=20, maxRouters=6，算出来的网络总节点数将是 186,621 ，这个数值将超出 16 bit 短地址能表达的范围。</p>
<p>虽然<strong>入网及地址分配时以树状为基础，但 ZigBee 其实是网状网络 (mesh network)，即路由时是网状网络路由优先</strong>，附加树状网络路由辅助的策略。</p>
<p>Stochastic 地址分配策略是 ZigBee Pro (stack profile 02) 上引入并且使用的。这里就不展开介绍。</p>
<h2><a id="user-content-数据路由" class="anchor" href="#数据路由" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>数据路由</h2>
<p>ZigBee 使用多种方式来对数据包进行路由</p>
<ul>
<li>广播：数据包从一个节点到多个节点。广播机制可以让一次请求即可把数据包发送给多个节点，广播消息是没有确认 (acknowledged) 的，即<strong>广播发送者不知道接收者是否收一了广播数据</strong>。另外，广播消息资源消耗比较多，实际应用时尽量少用广播机制。</li>
<li>网状路由：单播发送，数据包从一个节点到另外一个节点。路由信息建立后，网状路由是非常高效的路由协议 (时效性，带宽，内存占用等)。数据包通过网状路由发送是经过确认的，即<strong>发送者知道接收者是否收到数据包</strong>。网状网络是分布式的，这样就可以大幅减少空中包的数量。网状路由最多可以传输 30 跳，即经过 30 个节点来传输数据。</li>
<li>树状路由：单播发送，数据包从一个节点到另外一个节点，只在 stack profile 01 上使用。树状路由也是确认的路由机制。树状网络的带宽性能和网状网络相当，但需要更多的内存。**树状路由最大的缺点是，当父子节点之间的连接中断后，没有恢复机制。**所以 ZigBee 优先使用网状路由。</li>
<li>源路由：单播发送，数据包从一个节点到另外一个节点，只在 stack profile 02 上使用。<strong>源路由主要用在一个中心节点需要和成千上万个节点直接通信时。相比网状路由，它可以节省路由表的空间</strong>。它最大的缺点是只能支持 5 跳。</li>
</ul>
<p>各个路由方法的对比表如下：</p>
<table>
<thead>
<tr>
<th>Routing Method</th>
<th>Broadcast</th>
<th>Mesh</th>
<th>Tree</th>
<th>Source Route</th>
</tr>
</thead>
<tbody>
<tr>
<td>Multi-hop</td>
<td>Up to 30</td>
<td>Up to 30</td>
<td>Up to 10</td>
<td>Up to 5 hops</td>
</tr>
<tr>
<td>Multiple destinations</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>One-to-one</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Bandwidth efficient</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Payload efficient</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Acknowledged</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr></tbody></table>
<p>另外一个路由方法在 ZigBee 规范里没有提及，但很多厂商都支持的，称为<strong>邻近路由</strong>。如果一个节点在邻近 (在无线传输距离内)，发送节点知道目的节点就在邻近，那么数据久将直接发送给邻近的目的节点。这是一种很高效的路由方法。**只有当邻近节点是路由器或者子节点终端设备时才起作用。**如果邻近的目的节点是另外一个路由器的子节点，那么必须通过目的节点的路由器进行路由。</p>
<p>这里只是对路由做了简单的介绍，下面将对每种路由方法做详细的介绍。</p>
<h3><a id="user-content-广播" class="anchor" href="#广播" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>广播</h3>
<p><a href="https://camo.githubusercontent.com/f0ba19bb2666135cb197cee22cff1f84925531ee/687474703a2f2f6d6173746572732e646f6e6e74752e6f72672f323031302f666b6e742f7a75622f646973732f62726f6164636173742e676966" target="_blank"><img src="https://camo.githubusercontent.com/f0ba19bb2666135cb197cee22cff1f84925531ee/687474703a2f2f6d6173746572732e646f6e6e74752e6f72672f323031302f666b6e742f7a75622f646973732f62726f6164636173742e676966" alt="broadcast" data-canonical-src="http://masters.donntu.org/2010/fknt/zub/diss/broadcast.gif" style="max-width:100%;"></a></p>
<p><em>图片来自网络，侵删</em></p>
<p>这是广播数据传输的示意图。广播的传输象水波传输类似，当一个节点发送一个广播时，广播消息会被<strong>邻近</strong> (在无线传输距离内) 的<strong>路由器</strong>转发。</p>
<p>广播消息有一个非常重要的数据项称为<strong>半径 (radius)</strong>，取值为 0x01 - 0xff 。当一个路由器收到广播包时，会获得广播包的 radius 字段，并减去 1，如果这个时候 radius 还大于 0，则会用新的 radius 值转发这个广播数据包。</p>
<p>每个节点都维护一个<strong>广播传输表</strong>，简称 <strong>BTT (Broadcast Transaction Table)</strong>。BBT 不但被用来追踪节点转发的广播包，还用来避免应用层收到两次重复的广播包。当节点收到广播包时，先检查 radius &gt;= 0，条件满足后，判断这个广播是否已经在 BTT 里，如果已经存在，则直接丢弃，如果不在，则加入 BBT，同时把广播消息转交给应用层处理。</p>
<p>**BBT 默认大小为 9，广播在网络中的超时时间也是 9 秒。这意味着网络最多只能支撑 1 秒一个广播。**如果 BBT 满了，新收到的广播将被丢弃。</p>
<p>另外一个特殊的广播半径数值为 0，如果广播半径为 0 表示在整个 ZigBee 网络中广播。这是 ZigBee 协议规定的，但其实这个数值在协议内部一致性上有些问题，因为协议很多地方都使用 0xff 作为特殊值。比如入网时间为 0xff 表示永远允许入网。</p>
<p><strong>为什么不推荐使用广播</strong></p>
<p>路由发现协议使用广播。个别 ZDP 命令也使用广播传输，如当设备入网时 ZDP-Device_annce 命令将被广播发送给全网节点。这意味着节点入网时，可以每隔 2 秒重试一次。如果一下子要把 100 个节点加进网络，则可能需要多次重试。因为新设备入网时发送的广播可能会导致网络通信异常。</p>
<p>如果不断地有路由发现在执行，此时网络中将“充满”广播，路由发现协议数据包将可能被丢弃，最终导致路由发现失败。应用层将知道路由发现失败了，此时要么放弃路由发现，要么延时几秒后重试。</p>
<p><strong>广播示例</strong></p>
<pre><code>    Time        MACSrc  MACDst  NWKSrc  NWK Seq     R   NWKDst  Packet Type
---------------------------------------------------------------------------------------
31  +00.110     0x143e  0xffff  0x143e  12          5   0xffff  ZDP:EndDeviceAnnce
32  +00.022     0x0000  0xffff  0x143e  12          4   0xffff  ZDP:EndDeviceAnnce
33  +00.049     0x0001  0xffff  0x143e  12          3   0xffff  ZDP:EndDeviceAnnce
34  +00.090     0x143e  0xffff  0x143e  12          5   0xffff  ZDP:EndDeviceAnnce
35  +00.102     0x143e  0xffff  0x143e  12          5   0xffff  ZDP:EndDeviceAnnce
36  +00.030     0x0000  0xffff  0x143e  12          4   0xffff  ZDP:EndDeviceAnnce
37  +00.150     0x0001  0xffff  0x143e  12          3   0xffff  ZDP:EndDeviceAnnce
38  +00.013     0x0000  0xffff  0x143e  12          4   0xffff  ZDP:EndDeviceAnnce
</code></pre>
<p>几个说明：</p>
<ul>
<li>NWKSrc 和 NWK Seq 唯一地标识了一个广播包</li>
<li>MACSrc 在每次广播被转发的时候改变了，从这个字段可以看到哪些设备在转发广播包。转发过程中，NWKSrc 和 NWK Seq 保持不变</li>
<li>R 表示广播包的半径 radius 。每转发一次其值递减 1</li>
<li>从 Time 可以看到，每个转发设备都会随机延时一小段时间再转发广播包，这个时间称为 jitter。由此可见<strong>广播的传输会比单播慢</strong>。一般情况下，广播包传输到 10 跳所需要的时间大概是 1000 ms，而 10 跳的单播包只需要 50-100 ms。</li>
<li>只有路由器 (ZR and ZC) 会转发广播包，ZED 会收到广播包，但不会转发。ZED 也不会直接发起广播，它会用单播发送给他的父节点，由父节点代替 ZED 来发起广播。</li>
</ul>
<p><strong>广播模式</strong></p>
<p>有三种广播模式：</p>
<ul>
<li>0xffff: 广播给网络中的所有节点，包括睡眠的 ZED 节点</li>
<li>0xfffd: 广播给网络中所有非睡眠节点</li>
<li>0xfffc: 广播给网络中所有的路由器</li>
</ul>
<p>这三种广播广播模式在 ZDP 和 APS 层命令中使用，应用层也可以直接设置成某个模式来直接使用。</p>
<p>当把广播的半径 radius 设置为 1 时，数据包只在广播节点的所有邻近节点之间传输。这是一个很有用的机制。</p>
<h3><a id="user-content-网状路由" class="anchor" href="#网状路由" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>网状路由</h3>
<p>网状路由是 ZigBee 通信协议的核心内容。网状路由是简单但强大的概念。网络中两个节点之间的路由将被主动发现，它可以跨越最多
30 个中间节点。如果路由中间某个节点出了问题，造成路由中断，那么新的路由将被主动发现。</p>
<p>本节内容将详细描述路由表，路由发现过程，路由错误和路由维护。</p>
<p><strong>网状路由的特点</strong></p>
<ul>
<li>使用 AODV (Advanced Ad-hoc On-Demand Distance Vectoring) 作为路由算法，这是个公开的著名的路由算法。ZigBee 对算法做了改进，以适应低内存的设备要求 (8 bit cpu, which only have 2K - 4K RAM)。</li>
<li>所有的路由是端对端的。网络中的所有节点都可以发现路由，网络中的所有路由器都可能是潜在的路由。这一过程被称为<strong>路由发现</strong>。在路由发现的过程中，ZigBee 保存了一个<strong>路由发现表</strong> (注意和<strong>路由表</strong>的区别) 用来找到<strong>时间最高效</strong>的路由。</li>
<li>路由是分布式的。路由中的每个节点都会在其<strong>路由表</strong>里保存一个<strong>到达下一跳</strong>的路由信息。</li>
<li>路由是单向的。针对双向通信，必须有相应的独立的路由发现过程。</li>
<li>路由表里的路由信息 (即下一跳地址) 将持续使用，直到路由失败为止。</li>
<li>路由失败将会被通知给数据包发送节点，这样发送节点可以发起新的路由发现过程。</li>
</ul>
<p><strong>为什么 ZigBee 将网状路由作为其首选的核心路由协议？</strong></p>
<p>转发和广播的带宽成本太高，因为所有的邻近节点都会转发数据包，所以节点在转发之前，需要延时一个随机的时间，以避免冲突。而网状路由只需要路由上的节点转发数据包即可。这样节省了时间也节省了带宽。另外，网状路由还是<strong>逐跳确认</strong>的，而转发和广播不是，这样提高了网络通信的可靠性和带宽，因为不需要对已经确认的的消息进行转发。</p>
<p>源站路由需要事先配置 (比如 TCP/IP) ，某个人需要事选知道网络的下一跳，然后事先配置好网络。这样增加了网络配置成本。而使用网状路由，不需要事先配置，节点设备可以随意放置。当然，在 ZigBee Pro 里也提供了源站路由的功能。源站路由空中包开支比较大，<strong>802.15.4 PHY 层只提供 127 字节的包大小</strong>，扣除 ZigBee 协议的负载，实际提供给应用层的只有大概 100 字节。当使用源站路由时，可提供给应用层的就只有大概 80 字节，甚至 60 字节。也正是因为这个原因，ZigBee Pro 提供的源站路由最多只支持 5 跳，因为跳数越多，能提供给应用层的数据负载空间越小。</p>
<h4><a id="user-content-路由发现" class="anchor" href="#路由发现" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>路由发现</h4>
<p>路由发现由某个节点通过广播发起。在网络中，每个邻近节点的通信链路成本会在 PHY 层被自动测量并且记录起来，称为<strong>路径成本</strong>。路径成本在 1 - 7 之间，数字越大说明通信质量越差。在路由发现过程中，每条路由都将累加其到达目的节点的每一跳的路径成本。ZigBee 选择路径成本最低的那条路由作为最终路由。需要注意的是，<strong>路径成本最低并不等同于跳数最少</strong>。</p>
<p>路由发现的目的节点会等待一定的时间来判断哪个路由的路径成本最低。因为路径成本最低的路由不一定会第一个到达，这是因为广播传输在每个节点都会有个随机的延时。当路由发现的目的节点选择了一条路径成本最低的路由后，它会向发起路由发现的节点发送一个<strong>单播的路由应答</strong>。网络中的在这条路由上的所有中间节点按照反向顺序转发这条路由应答，并且更新自己的<strong>路由表</strong>信息。而其他的节点在<strong>路由发现表</strong>中保存了这条路由发现请求几秒的时间，超过时间限制后，将从路由发现表中清除掉。</p>
<p>路由发现协议只能在<strong>射频对称</strong>的网络中起作用。比如一个节点发射功率很大，但接收灵敏度很小，这样其邻近节点能接收到这个节点的信号，而当邻近节点想发送数据给这个节点时，这个节点却收不到。所以，在硬件设计层面，要么确保所有的节点都配置了 PA，要么确保配置了 PA 的节点同时也配置了同等灵敏度的 LNA (Low-Noise Amplifier)。</p>
<p>当路由建立起来后，所有从源节点到目的节点的数据包将沿着这条路由来发送。此时即使这条路由的路径成本不是最低的了，只要数据沿着这条路由能送达，就不会重新发起路由发现过程。除非这条路由不可用了，数据包无法送达，这个时候源节点才会再发起一次路由发现过程。应用层可以手动发起路由发现过程，这样确保要传送的某个数据包沿着路径成本最低的路由传送。但需要注意，这种行为尽量少用，因为路由发现过程用了广播，频繁使用可能导致网络拥塞。另外，路由发现过程可能持续 1 - 2 秒，时间成本也比较高。</p>
<p><a href="https://camo.githubusercontent.com/196cd586d3b4ea1d780ceb40bc58127ecd64d243/687474703a2f2f7777772e7266776972656c6573732d776f726c642e636f6d2f696d616765732f7a69676265655f6e6574776f726b2e6a7067" target="_blank"><img src="https://camo.githubusercontent.com/196cd586d3b4ea1d780ceb40bc58127ecd64d243/687474703a2f2f7777772e7266776972656c6573732d776f726c642e636f6d2f696d616765732f7a69676265655f6e6574776f726b2e6a7067" alt="route discovery" data-canonical-src="http://www.rfwireless-world.com/images/zigbee_network.jpg" style="max-width:100%;"></a></p>
<p><em>图片来自网络，侵删</em></p>
<p>上图是一个典型的 ZigBee 网络，可以在上面模拟路由发现过程。也可以演示为什么设备密度大或功率灵敏度高的网络通信速度较快。</p>
<h4><a id="user-content-路由表" class="anchor" href="#路由表" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>路由表</h4>
<p>网络中的每个路由器都保存一份路由表，路由表里包含<strong>最终地址；下一步地址；是否有效的标志位</strong>。典型的路由器的路由表大小大概是 6 - 10 个记录。一般情况下，这个路由表的大小能满足大多数的网络需求，因为路由器一般只跟邻近的节点以及协调器进行通信。</p>
<p>另外一个需要注意的信息是 ZED 不参与路由发现过程，也没有路由表。如果某个节点要查找到达 ZED 的路由，这个 ZED 的父节点会以这个 ZED 的身份来发送路由发现的应答。ZED 只接收来自其父节点的数据包，要发送数据包时，直接发送给其父节点。</p>
<p>正是由于 ZED 的这个特性，所以 ZC/ZR 在维护自己的路由表时，需要小心地对待其子设备列表。比如，<strong>ZC/ZR 如果发现其 ZED 子设备超过一段时间没有向其 POLL 数据，那么就认为这个子设备已经变成别人的子设备了，需要从自己的路由表里清除掉</strong>，以避免 ZC/ZR 把一个已经换了父设备的子设备依然当成自己的子设备。这样会导致其数据无法发送给子设备。原因是，未及时清除子设备列表的 ZC/ZR 会误以为那个 ZED 还是自己的子设备，所以不会把数据发送到网络去发现新路由，而是直接等着其子设备醒来后来 POLL 数据，但实际上这个 ZED 子设备已经是别人的子设备了。</p>
<p><strong>当路由表满了之后会发生什么？</strong></p>
<p>ZigBee 协议没有明确地规定路由表的维护策略，这一策略一般由芯片厂商实现。有些使用 LRU 算法，即最近使用最少的会被删除。有些直接不处理，而是让应用层去处理。</p>
<p>在一般工程实践过程中，路由发现只在设备安装调试的过程中发生一次，之后就一直沿用这个路由。由于某些特殊原因，比如移动了家具，或某些设备断电了，导致某个路由不可用了，才会再发起路由发现过程。</p>
<h4><a id="user-content-一个数据包实例" class="anchor" href="#一个数据包实例" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一个数据包实例</h4>
<p>抓出来的数据包的网络拓扑结果如下图</p>
<p><a href="/wuzhongtao/web/blob/master/images/zigbee_route_discovery.png" target="_blank"><img src="/wuzhongtao/web/raw/master/images/zigbee_route_discovery.png" alt="zigbee route discovery" style="max-width:100%;"></a></p>
<p>其中 0x0351 是个醒着的 ZED 设备，它是一个开关。0x796f 是协调器下面的一个子设备，它是一个睡眠设备，是一个电灯。每个设备的短地址都标在了其右侧。</p>
<pre><code>Seq     Time            MACSrc  DstPAN  MACDst  MACSeq  NwkSrc  NwkDst  NwkSeq  Packet Type
---------------------------------------------------------------------------------------------------------------------
STEP 1: route discover from 0x0351 to 0x0000
56      + 00:00:00.315  0x0351  0x0f00  0x0002  151     0x0351  0x0000  181     Zigbee APS Data ZDP:EndDeviceBindReq
57      + 00:00:00.002                          151                             IEEE 802.15.4 Acknowledgment
58      + 00:00:00.006  0x0002  0x0f00  0xffff  69      0x0002  0xfffc  113     Zigbee NWK NWK Command: Route Request
59      + 00:00:00.069  0x0001  0x0f00  0xffff  48      0x0002  0xfffc  113     Zigbee NWK NWK Command: Route Request
60      + 00:00:00.005  0x0000  0x0f00  0x0001  100     0x0000  0x0001  133     Zigbee NWK NWK Command: Route Reply
61      + 00:00:00.001                          100                             IEEE 802.15.4 Acknowledgment
62      + 00:00:00.003  0x0001  0x0f00  0x0002  49      0x0001  0x0002  45      Zigbee NWK NWK Command: Route Reply
63      + 00:00:00.001                          49                              IEEE 802.15.4 Acknowledgment
64      + 00:00:00.005  0x0002  0x0f00  0x0001  70      0x0351  0x0000  114     Zigbee APS Data ZDP:EndDeviceBindReq
65      + 00:00:00.002                          70                              IEEE 802.15.4 Acknowledgment
66      + 00:00:00.004  0x0001  0x0f00  0x0000  50      0x0351  0x0000  46      Zigbee APS Data ZDP:EndDeviceBindReq
67      + 00:00:00.002                          50                              IEEE 802.15.4 Acknowledgment
68      + 00:00:00.013  0x0000  0x0f00  0xffff  101     0x0002  0xffc   113     Zigbee NWK NWK Command: Route Request
69      + 00:00:00.030  0x143e  0x0f00  0xffff  203     0x0002  0xfffc  113     Zigbee NWK NWK Command: Route Request

STEP 2: route discover from 0x0351 to 0x796f
146     + 00:00:01.248  0x0351  0x0f00  0x0002  155     0x0351  0x796f  185     Zigbee APS Data HA:On/off:Toggle
147     + 00:00:00.001                          155                             IEEE 802.15.4 Acknowledgment
148     + 00:00:00.005  0x0002  0x0f00  0xffff  80      0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
149     + 00:00:00.036  0x143e  0x0f00  0xffff  211     0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
150     + 00:00:00.006  0x0000  0x0f00  0x143e  109     0x0000  0x143e  140     Zigbee NWK NWK Command: Route Reply
151     + 00:00:00.001                          109                             IEEE 802.15.4 Acknowledgment
152     + 00:00:00.004  0x143e  0x0f00  0x0002  212     0x143e  0x0002  206     Zigbee NWK NWK Command: Route Reply
153     + 00:00:00.001                          212                             IEEE 802.15.4 Acknowledgment
154     + 00:00:00.003  0x0002  0x0f00  0x143e  81      0x0351  0x796f  123     Zigbee APS Data HA:On/off:Toggle
155     + 00:00:00.001                          81                              IEEE 802.15.4 Acknowledgment
156     + 00:00:00.005  0x143e  0x0f00  0x0000  213     0x0351  0x796f  207     Zigbee APS Data HA:On/off:Toggle
157     + 00:00:00.001                          213                             IEEE 802.15.4 Acknowledgment
158     + 00:00:00.010  0x0001  0x0f00  0xffff  57      0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
159     + 00:00:00.005  0x0000  0x0f00  0xffff  111     0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
160     + 00:00:01.742  0x796f  0x0f00  0x0000  54                              IEEE 802.15.4 Command: Data Request
161     + 00:00:00.001                          54                              IEEE 802.15.4 Acknowledgment
162     + 00:00:00.004  0x0000  0x0f00  0x796f  110     0x0351  0x796f  141     Zigbee APS Data HA:On/off:Toggle

STEP 3: power off router 0x143e, route discover again from 0x0351 to 0x796f
243     + 00:00:01.248  0x0351  0x0f00  0x0002  159     0x0351  0x796f  189     Zigbee APS Data HA:On/off:Toggle
244     + 00:00:00.001                          159                             IEEE 802.15.4 Acknowledgment
245     + 00:00:00.003  0x0002  0x0f00  0x143e  85      0x0351  0x796f  127     Zigbee APS Data HA:On/off:Toggle
246     + 00:00:00.005  0x0002  0x0f00  0xffff  86      0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
247     + 00:00:00.039  0x0001  0x0f00  0xffff  58      0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
248     + 00:00:00.005  0x0000  0x0f00  0x0001  114     0x0000  0x0001  144     Zigbee NWK NWK Command: Route Reply
249     + 00:00:00.001                          114                             IEEE 802.15.4 Acknowledgment
250     + 00:00:00.002  0x0001  0x0f00  0x0002  59      0x0001  0x0002  49      Zigbee NWK NWK Command: Route Reply
251     + 00:00:00.001                          59                              IEEE 802.15.4 Acknowledgment
252     + 00:00:00.028  0x0000  0x0f00  0xffff  115     0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
253     + 00:00:00.262  0x0000  0x0f00  0xffff  116     0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
254     + 00:00:00.261  0x0000  0x0f00  0xffff  117     0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
255     + 00:00:01.087  0x796f  0x0f00  0x0000  82                              IEEE 802.15.4 Command: Data Request
256     + 00:00:00.001                          82                              IEEE 802.15.4 Acknowledgment
257     + 00:00:02.654  0x0351  0x0f00  0x0002  160     0x0351  0x796f  190     Zigbee APS Data HA:On/off:Toggle
258     + 00:00:00.001                          160                             IEEE 802.15.4 Acknowledgment
259     + 00:00:00.004  0x0002  0x0f00  0x0001  87      0x0351  0x796f  129     Zigbee APS Data HA:On/off:Toggle
260     + 00:00:00.001                          87                              IEEE 802.15.4 Acknowledgment
261     + 00:00:00.004  0x0001  0x0f00  0x0000  60      0x0351  0x796f  50      Zigbee APS Data HA:On/off:Toggle
262     + 00:00:00.001                          60                              IEEE 802.15.4 Acknowledgment
263     + 00:00:00.406  0x796f  0x0f00  0x0000  83                              IEEE 802.15.4 Command: Data Request
264     + 00:00:00.001                          83                              IEEE 802.15.4 Acknowledgment
265     + 00:00:00.003  0x0000  0x0f00  0x796f  118     0x0351  0x796f  145     Zigbee APS Data HA:On/off:Toggle
</code></pre>
<p>一些说明：</p>
<ul>
<li>56#: 0x0351 节点要发送一个 ZDP:EndDeviceBindReq 给 0x0000 节点，即发送给协调器，由于 0x0351 是个 ZED 设备，他直接把数据包发送给其父节点 0x0002。</li>
<li>57#：IEEE 802.15.4 MAC 层的一个确认包，这样 ZED 0x0351 就知道他的父节点 0x0002 收到了这个数据包</li>
<li>58#: 0x0002 发现他没有到达目的节点 0x0000 的路由信息，所以发起了一个路由发现过程，注意到这里的 NwkDst 是 0xfffc，这个字段是路由模式，表示广播给网络中的所有路由器</li>
<li>59#: 0x0001 的路由器收到路由发现请求包后，转发了这个广播包</li>
<li>60#：0x0000 的协调器收到路由发现请求包后，发现这个路由发现的目的地址是给他自己的，他就发送了一个路由应答包，这个应答包的 NwkDst 是 0x0001。</li>
<li>61#: 0x0001 发送了一个确认包给 0x0000，表示他收到了路由发现应答包</li>
<li>62#: 0x0001 更新完他的路由表后，转发了这条路由应答包给 0x0002。留意这个数据包里的 NwkSrc 和 NwkDst 字段。</li>
<li>63#：0x0002 发送了一个确认包给 0x0001，表示他收到了路由发现应答包</li>
<li>64#: 这个时候，0x0351 到达协调器 0x0000 的路由信息已经建立起来了，它是 0x0351 -&gt; 0x0002 -&gt; 0x0001 -&gt; 0x0000。0x0002 开始发送 ZDP:EndDeviceBindReq 命令，留意这个数据包里的 NwkSrc = 0x0351，即这个包是 0x0002 的子设备 ZED 发送的，NwkDst = 0x0000 表示这个数据包最终要发给协调器。而这个数据包的 MACSrc = 0x0002，MACDst = 0x0001，表示 0x0002 只把数据包发送给它的下一跳 0x0001。下一跳的地址就是由路由发现过程中发现的。</li>
<li>66#：0x0001 节点转发了这个数据包给 0x0000。</li>
<li>68#-69#: 这两数据包比较有意思，它实际上转发了路由发现请求的广播包。但此时这个数据包已经没有意义了，因为路由发现已经结束了，网络中已经使用了发现的路由来通信了。</li>
<li>STEP 2: 146# 0x0351 要发数据包给 0x796f。148# 0x0351 的父节点 0x0002 发现它没有到达 0x796f 的路由，就发起了路由发现过程。150# 152# 是路由发现应答，0x796f 是 0x0000 的子节点，所以 0x0000 代替 0x796f 作了应答，这次我们发现的路由是 0x0351 -&gt; 0x0002 -&gt; 0x143e -&gt; 0x0000 -&gt; 0x796f。</li>
<li>154#: 路由发现完成后，0x0351 的父节点 0x0002 自动把在 #146 处的数据包发送给路由的下一跳地址 0x143e。所以路由发现对数据发送方 0x0351 是完全透明的，它根本不知道外面发生了什么，只是把数据发给父节点。</li>
<li>156#：数据最终送到 0x796f 的父节点 0x0000 。由于 0x796f 是个睡眠的 ZED 设备，所以 0x0000 只好把数据暂存，没办法投递给 0x796f。</li>
<li>160#-162#: 过了将近 2 秒后，0x796f 醒来，在 MAC 层发送一个命令向父节点查询他睡眠期间是否有数据到来。这个时候，0x0000 终于有机会把暂存的数据包发送给 0x796f 子节点了。</li>
<li>STEP 3：在这里，我们故意<strong>破坏掉从 0x0351 到 0x796f 的路由，即把 0x143e 节点断电</strong>。</li>
<li>243#-245#: 沿着原来发现的路由，数据包从 0x0351 -&gt; 0x0002 -&gt; 0x143e，这个时候异常发生了，0x143e 没有对消息进行确认 (Acknowledgment)。这个时候 0x0002 发现了异常，原来的路由不通了。于是它发起了一次新的路由发现过程。</li>
<li>246#-251#: 0x0002 发起了新的路由发现过程，这次发现的新路由是 0x0002 -&gt; 0x0001 -&gt; 0x0000 -&gt; 0x796f。</li>
<li>252#-254#: 多余的路由发现广播，这三个包实际上是转发 #246 的路由发现广播。因为他们的 NwkSrc 和 NwkSeq 是一样的。</li>
<li>255#: 这是个挺有意思的包，我们知道睡眠 ZED 设备是定期向父设备查询看其睡眠期间是否有新数据到达。这次的查询发现没有给他的数据，所以 ZED 查询完就继续睡了。</li>
<li>257#-262#: 节点 0x0351 沿着新发现的路由把控制命令送给 0x796f 的父节点 0x0000 处。0x0000 等待 0x796f 醒来，来获取给它的数据。</li>
<li>263#-265#: 0x796f 终于醒过来了，向父设备查询数据，并顺利地收到了 0x0351 发给它的控制命令。</li>
</ul>
<h2><a id="user-content-空中数据包" class="anchor" href="#空中数据包" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>空中数据包</h2>
<p>要理解 ZigBee 协议，对协议空中包的解读至关重要。实际上 ZigBee 联盟在对设备进行兼容性测试时，主要是看空中包是否符合协议规范，是否互相兼容。其他的其实都是黑盒子。理解空中包同样对调试非常有帮助，通过空中包的分析，可以看到网络中哪个节点有 BUG，为什么一个数据包没有被正确地送达？带宽是否有问题？</p>
<p>一个完整的空中包包含很多层，主要有 MAC, NWK, APS, ZCL 等。下图是一个完整的空中包的帧结构</p>
<p><a href="/wuzhongtao/web/blob/master/images/zigbee_frame.png" target="_blank"><img src="/wuzhongtao/web/raw/master/images/zigbee_frame.png" alt="zigbee frame" style="max-width:100%;"></a></p>
<p>一些说明：</p>
<ul>
<li>不同层的帧是叠加起来的。比如 NWK 层的帧数据放在 MAC 层的 Payload 里。APS 层的帧数据放在 NWK 的 Payload 里。ZCL 层的帧放在 APS 的 Payload 里。</li>
<li>每层的包头长度是不固定的，参数不同包头长度也不同。每层的帧头都以 FC (Frame Control) 作为开头，FC 对包头的可选参数进行了描述，即哪些字段出现在包头中，哪些不出现。</li>
<li>MAC 层的帧以 FCS (Frame Check Sum) 结尾。NWK 层的帧以可选的 MIC (Message Integrity Code) 结尾。NWK AUX HDR 和
NWK MIC 只出现在启用了 NWK 层安全机制的网络中。APS 也有可选的安全机制，如果安全机制启用的情况下 APS AUX HDR 和 APS MIC 将出现在 APS 层数据帧中。</li>
<li>MAC 头和 NWK 头是为了在节点之间寻址的。MAC 头控制逐跳的寻址，NWK 头控制源节点到目的节点的寻址。所以 MAC 层的地址在每一跳都会改变，而 NWK 层的地址从头到尾都保持一致。</li>
</ul>
<p><a href="/wuzhongtao/web/blob/master/images/zigbee_frame.png" target="_blank"><img src="/wuzhongtao/web/raw/master/images/zigbee_frame.png" alt="zigbee frame" style="max-width:100%;"></a></p>
<p>这是 MAC 和 NWK 帧头信息。APS 帧和 ZCL 帧不是本节的主要内容，就不详细介绍。</p>
<p><strong>一个数据帧的例子</strong></p>
<pre><code>IEEE 802.15.4
    Frame Control: 0x8861
        .... .... .... .001 = Frame Type: Data (0x0001)
        .... .... .... 0... = Security Enabled: Disabled
        .... .... ...0 .... = Frame Pending: No more data
        .... .... ..1. .... = Acknowledgement Request: Acknowledgement required
        .... .... .1.. .... = Intra PAN: Within the PAN
        .... ..00 0... .... = Reserved
        .... 10.. .... .... = Destination Addressing Mode: Address field
                              contains a 16-bit short address (0x0002)
        ..00 .... .... .... = Reserved
        10.. .... .... .... = Source Addressing Mode: Address field contains
                              a 16-bit short address (0x0002)
    Sequence Number: 230
    Destination PAN Identifier: 0x0f00
    Destination Address: 0x0000
    Source Address: 0x0001
    Frame Check Sequence: Correct
ZigBee NWK
    Frame Control: 0x0248
        .... .... .... ..00 = Frame Type: NWK Data (0x00)
        .... .... ..00 10.. = Protocol Version (0x02)
        .... .... 01.. .... = Discover Route: Enable route discovery (0x01)
        .... ...0 .... .... = Multicast: Unicast or broadcast (0x00)
        .... ..1. .... .... = Security: Enabled
        .... .0.. .... .... = Source Route: Not present (0x00)
        .... 0... .... .... = Destination IEEE Address: Not Included
        ...0 .... .... .... = Source IEEE Address: Not Included
        000. .... .... .... = Reserved
    Destination Address: 0x796f
    Source Address: 0x1430
    Radius = 9
    Sequence Number = 174
ZigBee AUX
    Security Control: 0x28
        .... .000 = Security Level: Attributes: None; Encryption: Off; MIC:
                    No (M0) (0x00)
        ...0 1... = Key Identifier: Network (0x01)
        ..1. .... = Extended Nonce: Sender Address Field: Present (0x01)
        00.. .... = Reserved: (0x00)
    Frame Counter: 0x09
    Source Address: 0x0050c237b0040002
    Key Sequence Number: 0x00
    MIC: 00:fd:30:14
ZigBee APS
    Frame Control: 0x00
        .... ..00 = Frame Type: APS Data (0x00)
        .... 00.. = Delivery Mode: Normal Unicast Delivery (0x00)
        ...0 .... = Reserved
        ..0. .... = Security: False
        .0.. .... = Ack Request: Acknowledgement not required
        0... .... = Extended Header Present: Extended header is not present
    Destination Endpoint: 0x08
    Cluster Identifier: On/off (0x0006)
    Profile Identifier: HA (0x0104)
    Source Endpoint: 0x08
    Counter: 0x27
ZigBee ZCL
    Frame Control: 0x01
        .... ..01 = Frame Type: Command is specific to a cluster (0x01)
        .... .0.. = Manufacturer Specific: The manufacturer code field shall
                    not be included in the ZCL frame. (0x00)
        .... 0... = Direction: From the client side to the server side.(0x00)
        ...0 .... = Disable Default Response: Default response command will
                    be returned. (0x00)
        .... .... = Reserved: Reserved (0x00)
    Transaction Sequence Number: 0x42
    Command Identifier: Toggle (0x02)
</code></pre>
<p>一些说明：</p>
<ul>
<li>IEEE 802.15.4 Frame Control: Security Enabled: Disabled: 上文提到过，ZigBee 为了能在超低端的设备上运行，没有采用 IEEE 802.15.4 定义的 MAC 层安全机制。ZigBee 的安全机制中由 NWK 层保证的。所以这里 MAC 层的安全机制是关闭的。</li>
<li>IEEE 802.15.4 Frame Control: Acknowledgement Request: Acknowledgement required: 这里是请求 MAC 层确认的开关。这个数据包里是打开的，如果是针对广播数据包，这个字段就是关闭的。因为广播是没有确认的。</li>
<li>IEEE 802.15.4 Frame Control: Destination Addressing Mode: Source Addressing Mode: MAC 层的地址样式。这里是使用 16 bit 短地址。但如果是设备的入网请求数据包，这里就必须用 64 bit 的长地址。因为还没入网，还不知道自己的短地址，只能用长地址进行寻址。</li>
<li>IEEE 802.15.4 Sequence Number: MAC 层的包序列号，用来唯一地标识一个 MAC 层的数据包。序列号是 8 bit 的，即这里假设不可能同时有 256 个属于同一个节点的数据包在空中传输。否则就会有冲突。</li>
<li>IEEE 802.15.4 Source Address: 注意到这里 MAC 层也使用短地址。同时可以看到 MAC 层的地址和 NWK 层的地址是不一样的。因为 MAC 层是控制逐跳间寻址的。而 NWK 是发送方和接收方的地址。</li>
<li>ZigBee NWK Frame Control: Protocol Version: 这里的协议版本是 2，实际上对 ZigBee 协议，这里都是 2。这个字段和 stack profile 无关。ZigBee 2004 的版本是 1 ，ZigBee 2006, 2007，ZigBee Pro 都使用 2 作为协议版本号。</li>
<li>ZigBee NWK Frame Control: Security: Enabled: 这个标志表明 NWK 层的安全上启用的。这样帧中就会出现可选的 NWK AUX 帧信息。</li>
<li>ZigBee AUX: 这是 NWK 层的安全机制启用时才会出现的数据。其中有两个关键的字段用来保证通信的安全。一个是 32 bit 的 Frame Counter 用来标识消息的新旧程度。如果信息太旧了，会被接收方拒绝。这个机制可以避免重放攻击。另外一个字段是 MIC，这个字段是为了避免中间人修改数据。MIC 是用 128 bit 的安全密钥生成的，任何修改消息体的行为都会导致解密失败。这里涉及到 ZigBee 的网络安全机制，包括证书传输，安全中心 (Trust Center) 等概念。需要专门的文章来介绍。</li>
<li>ZigBee APS: 这里包含应用层的信息。对这个帧来说，我们可以看到这是个单播信息，APS 层的安全机制是关闭的。所以不会出现 APS AUX 帧数据了。Extended Header Present 为 0，表示个应用层数据没有分包，在一个包里就传输完了。Ack Request 为 0 表明 APS 层的端对端确认消息是关闭的。</li>
<li>ZigBee ZCL: 最后一帧是 ZCL 帧信息。它包含 ZigBee Cluster Library 信息。APS 和 ZCL 需要另外的文章来介绍 ZigBee 应用层的相关协议。</li>
</ul>
<p>再看一个密钥传输的例子。一个设备加入网络，安全中心发送了一份密钥给新设备。这样新设备就可以使用这个密钥在网络中通信。没有密钥的设备由于无法生成相应的加密信息，通信会失败。</p>
<pre><code>Frame 10 (Length = 56 bytes)
IEEE 802.15.4
ZigBee NWK
    Frame Control: 0x0008
    Destination Address: 0x0001
    Source Address: 0x0000
    Radius = 10
    Sequence Number = 185
ZigBee APS
    Frame Control: 0x01
    Counter: 0x2b
    APS Payload
    APS Command Identifier = Transport Key: (0x05)
    KeyTransport.CommandPayload
    Key Type: Network Key (0x01)
    Key: 04:03:02:01:04:03:02:01:04:03:02:01:04:03:02:01
    Sequence Number: 0
    Destination Address: 00:50:c2:37:b0:04:00:02
    Source Address: 00:50:c2:37:b0:04:00:01
</code></pre>
<p>在一个 ZigBee 安全网络里，密钥可以固化在节点里，也可以在节点加入网络时由安全中心 (一般由 ZC 兼任) 发送证书给新入网的节点。如果是由安全中心在入网时发送证书，实际上还是暴露了一个安全漏洞，因为这里发送的证书是可以被嗅探到的。</p>
<h2><a id="user-content-zigbee-stack-profiles" class="anchor" href="#zigbee-stack-profiles" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ZigBee Stack Profiles</h2>
<p>现行有两个 ZigBee stack profile，一个是 01，代表 ZigBee 2006, ZigBee 2007 版本的协议。另外一个是 02，代表 ZigBee Pro 版本的协议。</p>
<p>Stack Profile 01 用在成本敏感型的设备上。它有如下特点：</p>
<ul>
<li>可预测的地址分配策略，就是上文介绍的 CSkip 地址分配方案</li>
<li>树状路由</li>
<li>更少的代码尺寸，意味着更低的 ROM 和 RAM 需求</li>
<li>数据包最多传 10 跳。这意味着网络规模较小</li>
</ul>
<p>Stack Profile 02 也称为 ZigBee Pro。它不支持树状路由，但增加了源站路由。它用在成本不是第一考虑因素，网络规模才是第一考虑因素的场景下。主要有以下特征：</p>
<ul>
<li>随机的地址分配</li>
<li>源站路由</li>
<li>多播</li>
<li>更大的代码尺寸，意味着更大的 ROM 和 RAM 需求</li>
<li>数据包最多可传 30 跳。这意味着网络规模较大</li>
</ul>
<p>两个版本的协议都支持单播，广播，组，端点，簇等协议。实际应用中，最大的差别在于对 ROM 和 RAM 的要求不同，地址分配方案不同，可选的路由不同，以及数据包传输的最大跳数不同。</p>
<p>Stack Profile 的版本在信标指令里呈现的。如上文介绍，信标指令是用来发现网络的。我们看一个 Stack Profile 02 的信标指令：</p>
<pre><code>IEEE 802.15.4
NWK Layer Information: 0x8422
    .... .... .... 0010 = Stack Profile (0x2)
    .... .... 0010 .... = nwkcProtocolVersion (0x2)
    .... ..00 .... .... = Reserved (0x0)
    .... .1.. .... .... = Router Capacity: True
    .000 0... .... .... = Device Depth (0x0)
    1... .... .... .... = End Device Capacity: True
    Extended PAN ID: 0x0050c237b0040001
</code></pre>
<p>下面是一个 stack profile 01 的信标指令：</p>
<pre><code>IEEE 802.15.4
NWK Layer Information: 0x8421
    .... .... .... 0001 = Stack Profile (0x1)
    .... .... 0010 .... = nwkcProtocolVersion (0x2)
    .... ..00 .... .... = Reserved (0x0)
    .... .1.. .... .... = Router Capacity: True
    .000 0... .... .... = Device Depth (0x0)
    1... .... .... .... = End Device Capacity: True
    Extended PAN ID: 0x0050c211dc051801
</code></pre>
<p>需要注意的是 stack profile 01 和 stack profile 02 的设备可以加入对方的网络，即他们是兼容的。但对路由器设备而言，如果不支持网络的路由方法，则必须以 ZED 的身份加入网络。一般情况下，协议芯片供应商提供会提供协议版本的选择。有些提供编译时选择，有些提供运行时选择。编译时选择机制可以减小 ROM 占用。而运行时选择 ROM 占用会比较大，主要提供了设备的灵活性。</p>
<h2><a id="user-content-faq" class="anchor" href="#faq" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ</h2>
<ul>
<li>i-jia 系统的树状路由是否使能？
A：没有使能</li>
<li>i-jia 协调器在组网时，使用什么策略来决定通信信道？
A：目前是定死在 15 信道</li>
<li>i-jia 协调器在组网时，使用什么策略来决定 PAN ID？
A：随便 0xff，由协议栈随机决定</li>
<li>i-jia 系统是否启用 ExtendedPANID？
A：启用的</li>
<li>i-jia 系统的 MAC 地址是我们公司买的么？公司的组织编码是多少？
A：TI 出厂的时候已经写好了 TI 申请的 MAC 地址。目前我们直接使用，没有用我们自己申请</li>
<li>i-jia 系统的设备有哪些是 ZR，哪些是 ZED？
A：摇控器和情景面板是 ZED，会进入睡眠。其他的都是 ZR，不进入睡眠</li>
<li>i-jia 系统的 ZR 是否配置为允许设备入网功能？
A：ZR 是可以允许设备入网，但总开关还是在 ZC 上，即 App 控制 ZC 是否允许设备入网，ZC 会把这个开关传递给所有的 ZR。</li>
<li>i-jia 系统的路由器的路由表大小是多少？
A：目前是 16 个</li>
<li>i-jia 系统如何维护路由表？即表满了怎么办？
A：满了就不处理</li>
<li>257# 为什么 0x0002 不直接再发送数据包，而是要等超时后由 0x0351 重发？
A：这里可能涉及到 APS 层和 NWK 层的重发机制。目前 APS 层有重发机制，NWK 层也有重发机制。</li>
<li>i-jia 系统是否启用 zigbee NWK 层和 APS 层的安全机制？
A：NWK 层启用了安全机制，APS 没有启用</li>
<li>如果启用安全机制，那么安全中心一般使用什么算法来判断子设备是否是个合法的设备，从而决定要不要给子设备发送密钥？
A：目前所有的设备都预置一个 HA 密钥。TC 会无条件给入网的新设备发送用 HA 密钥加密的网络密钥。目前都使用 AES 加密算法。</li>
<li>i-jia 使用 stack profile 01 还是 stack profile 02?
A：目前使用 stack profile 02。但没有使用源站路由功能。</li>
<li>i-jia 上 TI 提供的方案，stack profile 是编译时决定的还是运行时决定的？
A：TI 协议栈目前只提供 stack profile 02，不提供 stack profile 01</li>
<li>TI 开发环境里，哪个编译开关指定这个设备的类型 ZC, ZR, ZED？</li>
<li>i-jia 系统里，ZR 和 ZED 入网时，查找哪个 PAN ID？</li>
<li>i-jia 系统里，地址分配方案是采用 zigbee profile 01 的 CSkip 还是使用 zigbee profile 02 的随机分配策略？</li>
<li>i-jia 系统里，ZED 设备是否有在 MAC 层定时轮询其父节点看是否有发给他的数据？如果有，时间是多长？</li>
<li>i-jia 系统的 Broadcast Trasaction Table (BTT) 大小是多少？</li>
</ul>
</article>
  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2017 <span title="0.14922s from unicorn-816483557-wtdp0">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-ADlWtmO0Qfn/6JFR8DV8xKaQfuJQgDIYo/A0n82SxfQ=" src="https://assets-cdn.github.com/assets/frameworks-003956b663b441f9ffe89151f0357cc4a6907ee250803218a3f0349fcd92c5f4.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha256-nXnQhJxf2BtbV1cl++rkmqQWyF4WfZEtNW1zDkZSScg=" src="https://assets-cdn.github.com/assets/github-9d79d0849c5fd81b5b575725fbeae49aa416c85e167d912d356d730e465249c8.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

