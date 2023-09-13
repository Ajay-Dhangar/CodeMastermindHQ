
import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// function WebsiteLink({to, children}: {to: string; children?: ReactNode}) {
//   return (
//     <Link to={to}>
//       {children ?? (
//         <Translate id="team.profile.websiteLinkLabel">website</Translate>
//       )}
//     </Link>
//   );
// }

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Twitter
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Ajay Dhangar"
        githubUrl="https://github.com/Ajay-Dhangar"
        twitterUrl="https://twitter.com/AJAYDHA27250016">
        <Translate id="team.profile.Ajay Ajay.body">
        Software Engineer | Open Source Enthusiast | Tech Blogger | Problem Solver || Founder and Lead Developer of CodeMastermindHQ
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Shivaya"
        githubUrl="https://github.com/ShivayaCoder">
        <Translate id="team.profile.shivaya Shivaya.body">
        Problem Solver || A passionate Full Stack Web developer from India || CO-Founder and Developer of CodeMastermindHQ
        </Translate>    
      </TeamProfileCardCol>
    </div>
  );
}

export function HonoraryAlumniTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Ajay Dhangar"
        githubUrl="https://github.com/Ajay-Dhangar"
        twitterUrl="https://twitter.com/AJAYDHA27250016">
        <Translate id="team.profile.Ajay-Dhangar Ajay.body">
          Maintainer @CMHQ · 🔥🔥🔥
        </Translate>
      </TeamProfileCardCol>      
    </div>
  );
}

export function StudentFellowsTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Ajay Dhangar"
        githubUrl="https://github.com/Ajay-Dhangar"
        twitterUrl="https://twitter.com/AJAYDHA27250016">
        <Translate
          id="team.profile.Ajay-Dhangar Ajay-Dhangar.body"
          values={{
            websiteLink: (
              <Link href="https://ajay-dhangar.github.io/">
                <Translate id="team.profile.Ajay-Dhangar Ajay-Dhangar.body.websiteLink.label">
                  website
                </Translate>
              </Link>
            ),
          }}>
          {
            'Fullstack developer who loves to code and try new technologies. In his free time, he contributes to open source, writes blog posts at CMHQ.'
          }
        </Translate>
      </TeamProfileCardCol>      
    </div>
  );
}