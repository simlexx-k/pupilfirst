class FounderDashboardTargetCollection extends React.Component {
  targets() {
    if (this.props.targets.length < 1) {
      return (
        <div className="founder-dashboard-target-noresult text-xs-center p-y-2">
          <img className="founder-dashboard-target-noresult__icon m-x-auto"
            src={ this.props.iconPaths.noResults }/>
          <h4 className="m-t-1 font-regular">No results to display!</h4>
        </div>
      )
    } else {
      return this.props.targets.map(function (target) {
        return <FounderDashboardTarget key={ target.id } target={ target } iconPaths={ this.props.iconPaths }
          displayDate={ this.props.displayDate } founderDetails={ this.props.founderDetails} selectTargetCB={ this.props.selectTargetCB }/>
      }, this);
    }
  }

  containerClasses() {
    let classes = 'founder-dashboard-target-group__container px-2 mx-auto';

    if (this.props.finalCollection) {
      classes += ' founder-dashboard-target-group__container--final';
    }

    return classes;
  }

  render() {
    return (
      <div className={ this.containerClasses() }>
        <div className="founder-dashboard-target-group__box">
          <div className="founder-dashboard-target-group__header text-center">
            { this.props.milestone &&
            <div className="founder-dashboard-target-group__milestone-label text-uppercase font-semibold">
              Milestone Targets
            </div>
            }

            <h3 className="font-semibold mt-3 mb-0">
              { this.props.name }
            </h3>

            { this.props.description &&
            <p className="founder-dashboard-target-group__header-info">
              { this.props.description }
            </p>
            }
          </div>

          { this.targets() }
        </div>
      </div>
    );
  }
}

FounderDashboardTargetCollection.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  targets: React.PropTypes.array,
  displayDate: React.PropTypes.bool,
  milestone: React.PropTypes.bool,
  finalCollection: React.PropTypes.bool,
  iconPaths: React.PropTypes.object,
  founderDetails: React.PropTypes.array,
  selectTargetCB: React.PropTypes.func
};

FounderDashboardTargetCollection.defaultProps = {
  milestone: false,
  finalCollection: false
};
