import React from 'react';

// This is the Higher Order Component
const withPremiumBadge = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isPremiumUser, ...rest } = this.props;

      return (
        <div>
          {isPremiumUser && <div>Premium User</div>}
          <WrappedComponent {...rest} />
        </div>
      );
    }
  };
};

// This is the original component
class UserProfile extends React.Component {
  render() {
    const { name, isPremiumUser } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        {isPremiumUser ? <p>Premium User Content</p> : <p>Regular User Content</p>}
      </div>
    );
  }
}

// Wrap UserProfile component with the withPremiumBadge HOC
const UserProfileWithBadge = withPremiumBadge(UserProfile);

// Usage
const App = () => {
  return (
    <div>
      <UserProfileWithBadge name="Shivay" isPremiumUser />
      <UserProfileWithBadge name="Ajay Dhangar" isPremiumUser={false} />
    </div>
  );
};

export default App;
