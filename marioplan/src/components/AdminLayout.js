import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import Link from 'next/link';
import Router from 'next/router';

export default class MenuExampleHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu className='menu'>
          <Dropdown item text='Proverbs'>
            <Dropdown.Menu>
              <Dropdown.Item
                name='create'
                active={activeItem === 'create'}
                onClick={this.handleItemClick}
                href="/admin/proverb_create">
                Create
                </Dropdown.Item>
              <Dropdown.Item
                name='edit'
                active={activeItem === 'edit'}
                onClick={this.handleItemClick}
                href="/admin/proverb_edit">
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                name='delete'
                active={activeItem === 'delete'}
                onClick={this.handleItemClick}
                href="/admin/proverb_delete">
                Delete
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name='email'
            active={activeItem === 'email'}
            onClick={this.handleItemClick}
            href=""
          />
          <Menu.Item
            name='Login'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
            href=""
          />
          <Menu.Item
            name='Logout'
            active={activeItem === 'Logout'}
            onClick={this.handleItemClick}
            href=""
          />
        </Menu>
        {this.props.children}
      </div>
    )
  }
}