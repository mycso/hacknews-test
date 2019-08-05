import styled from 'styled-components';
import { mobile, tablet } from 'styles/mediaQueries';

export const Wrapper = styled.div`
	width: 85%;
	margin-left: auto;
	margin-right: auto;
	height: 100%
	overflow: hidden;
	padding-bottom: 200px;

	${tablet} {
		width: 96%;
	}
`;

export const Title = styled.h1`
	color: ${props => props.theme.textSecondary};
	font-size: 20px;
	font-weight: 300;
	margin-top: 0px;
	margin-bottom: 0px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 26px;
  ${mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const SocialLink = styled.a`
  margin-left: 16px;
  i {
    color: ${({ theme }) => theme.text};
  }
  ${mobile} {
    margin-left: 0;
    margin-right: 16px;
  }
`;

export const GithubLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  text-decoration: underline;
  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Reload = styled.span`
  cursor: pointer;
`;

export const OrangeHeader = styled.header`
  background: #ff6600;
  height: 53px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`; 

export const LogoTitle = styled.h1`
  color: ${props => props.theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: 'Orbitron', sans-serif;
`; 