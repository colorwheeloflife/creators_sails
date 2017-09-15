import React, { Component } from 'react';

import CommaJoin from '../../../lib/CommaJoin';
import Styler from '../../../lib/Styler';

import VibeBadge from '../../reusables/VibeBadge';

export default class ShopProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutShopOpen: false,
      aboutCreatorsOpen: false
    }
  }

  handleAboutClick = (about) => {
    const { aboutShopOpen, aboutCreatorsOpen } = this.state;
    switch (about) {
      case 'shop':
        this.setState({
          aboutShopOpen: !aboutShopOpen,
          aboutCreatorsOpen: false
        });
        break;
      case 'creators':
        this.setState({
          aboutCreatorsOpen: !aboutCreatorsOpen,
          aboutShopOpen: false
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { aboutShopOpen, aboutCreatorsOpen } = this.state;
    const { profile } = this.props;

    const shopProfileClass = Styler(
      'shop_profile',
      aboutShopOpen ? 'about_shop_open' : '',
      aboutCreatorsOpen ? 'about_creators_open' : ''
    );

    const shopAboutBtnClass = Styler(
      'about_btn shop',
      aboutShopOpen ? 'active' : ''
    );

    const creatorsAboutBtnClass = Styler(
      'about_btn creators',
      aboutCreatorsOpen ? 'active' : ''
    );

    const shopAboutClass = Styler(
      'shop_about',
      aboutShopOpen ? '' : 'hidden'
    );

    const creatorsAboutClass = Styler(
      'creators_about',
      aboutCreatorsOpen ? '' : 'hidden'
    );

    const categories = profile.categories.map((category, index) => {
      const subcategories = profile.subcategories.map((subcategory, index) => {
        if ( subcategory.category_id === category.id ) {
          return (
            <div key={ subcategory.name } className='subcategory'>
               &nbsp;| { subcategory.name }
            </div>
          );
        }
      });

      return (
        <div key={ category.name } className='category_row'>
          <div className='category'>
            { category.name }
          </div>

          <div className='subcategories'>
            { subcategories }
          </div>
        </div>
      );
    });

    const vibe_badges = profile.tags.map((tag, index) => {
      if ( tag.type === 'vibe' && tag.badge === true ) {
        return (
          <VibeBadge
            key={ tag.name }
            tag={ tag } />
        );
      }
    });

    const standard_tags_list = () => {
      const tags = [];

      const standard_tags = profile.tags.map((tag, index ) => {
        if ( tag.badge !== true ) {
          tags.push(tag.name);
        }
      });

      const tags_alphabetized = tags.sort();
      const tags_list = CommaJoin(tags)

      return (
        <div className='standard_tags'>
          { tags_list }
        </div>
      );
    }



    return (
      <div className={ shopProfileClass }>

        <div className='shop_profile_col_1'>
          <div className='shop_profile_picture'>
          </div>

          <div className='about_button_container'>
            <div
              className={ shopAboutBtnClass }
              onClick={ event => this.handleAboutClick('shop') }>
              About Shop
            </div>
            <div
              className={ creatorsAboutBtnClass }
              onClick={ event => this.handleAboutClick('creators') }>
              About Creators
            </div>
          </div>
        </div>

        <div className='shop_info'>
          <div className='title'>
            { profile.name }
          </div>

          <div className='tagline'>
            { profile.tagline }
          </div>

          <div className='category_container'>
            { categories }
          </div>

          <div className='location_container'>
            <div className='location current'>
              lives in: { profile.location }
            </div>

            <div className='location origin'>
              from: { profile.origin }
            </div>
          </div>

          <div className='description'>
            { profile.description }
          </div>
        </div>

        <div className='tag_container'>
          <div className='vibes_badge_container'>
            { vibe_badges }
          </div>
          <div className='standard_tags_container'>
            <div className='standard_tags_label'>tags:&nbsp;</div>
            { standard_tags_list() }
          </div>
        </div>

        <div className={ shopAboutClass }>

        </div>

        <div className={ creatorsAboutClass }>

        </div>

      </div>
    );
  }
}




/*



*/
