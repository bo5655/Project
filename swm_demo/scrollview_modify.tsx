const refreshControl = this.props.refreshControl;
const scrollViewRef = this._scrollView.getForwardingRef(this.props.scrollViewRef);

return (
  <NativeDirectionalScrollView {...props} ref={scrollViewRef}>
    {refreshControl}
    {contentContainer}
  </NativeDirectionalScrollView>
);

