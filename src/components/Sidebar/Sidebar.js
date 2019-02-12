import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import styles from './Sidebar.module.scss';

export const PureSidebar = ({ data, isIndex }) => {
	const { author, copyright } = data.site.siteMetadata;

	return (
		<div className={styles['sidebar']}>
			<div className={styles['sidebar__inner']}>
				<Author author={author} isIndex={isIndex} />

				<Contacts contacts={author.contacts} />
				<Copyright copyright={copyright} />
			</div>
		</div>
	);
};

export const Sidebar = props => (
	<StaticQuery
		query={graphql`
			query SidebarQuery {
				site {
					siteMetadata {
						title
						subtitle
						copyright
						author {
							name
							photo
							bio
							contacts {
								twitter
								github
								email
								linkedin
							}
						}
					}
				}
			}
		`}
		render={data => <PureSidebar {...props} data={data} />}
	/>
);

export default Sidebar;
