import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from 'components/List';
import Grid from 'components/Grid';
import Loader from 'components/Loader';
import { layouts, themes } from 'store/app/utils';
import { colorsDark, colorsLight } from 'styles/palette';

import { Wrapper, Title, TitleWrapper, GithubLink, SocialLink, Reload, OrangeHeader, LogoTitle } from './styles';

class App extends Component {
  static defaultProps = {
    stories: [],
  };

  static propTypes = {
    layout: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    stories: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    storyIds: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasMoreStores: PropTypes.bool.isRequired,
    fetchStories: PropTypes.func.isRequired,
    fetchStoriesFirstPage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  reloadNews(event) {
   this.setState({ stories: [] });
  }

  render() {
    const { stories, layout, theme, hasMoreStores } = this.props;
    return (
      <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
        <div>
            <div>
              <OrangeHeader>
               <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <img src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" width="30" /><a className="navbar-brand ml-2 text-dark" href="#"><LogoTitle className="text-dark">Hacker News</LogoTitle></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <Reload><button className="btn btn-dark" typee="button" onClick={ this.reloadNews.bind(this) }><span className="icon-reload oi oi-reload" title="reload" aria-hidden="true"></span></button></Reload>
                </nav>
              </OrangeHeader>
            </div>
          <Wrapper>
            <TitleWrapper>
              <div>
                <SocialLink href="https://twitter.com/gitconnected" target="blank">
                  <i className="fab fa-twitter" />
                </SocialLink>
                <SocialLink href="https://community.gitconnected.com" target="blank">
                  <i className="fab fa-slack-hash" />
                </SocialLink>
                <SocialLink href="https://levelup.gitconnected.com" target="blank">
                  <i className="fab fa-medium-m" />
                </SocialLink>
                <SocialLink href="https://www.facebook.com/gitconnectednetwork" target="blank">
                  <i className="fab fa-facebook" />
                </SocialLink>
                <SocialLink href="https://gitconnected.com" target="blank">
                  <i className="fas fa-link" />
                </SocialLink>
              </div>
            </TitleWrapper>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStores}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
              {layout === layouts.list ? <List stories={stories} /> : <Grid stories={stories} />}
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;