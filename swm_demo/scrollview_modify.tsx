const refreshControl = this.props.refreshControl;
const scrollViewRef = this._scrollView.getForwardingRef(this.props.scrollViewRef);

return (
  <NativeDirectionalScrollView {...props} ref={scrollViewRef}>
    {refreshControl}
    {contentContainer}
  </NativeDirectionalScrollView>
);

// new modify code
const refreshControl = this.props.refreshControl;
const scrollViewRef = this._scrollView.getForwardingRef(this.props.scrollViewRef);

if (refreshControl) {
  // RNOH: patch - use Android implementation
  const { outer, inner } = splitLayoutProps(flattenStyle(props.style));
  return (
    <NativeDirectionalScrollView
      {...props}
      style={StyleSheet.compose(baseStyle, inner)}
      ref={scrollViewRef}
    >
      {React.cloneElement(
        refreshControl,
        { style: StyleSheet.compose(baseStyle, outer) }
      )}
      {contentContainer}
    </NativeDirectionalScrollView>
  );
}

return (
  <NativeDirectionalScrollView {...props} ref={scrollViewRef}>
    {contentContainer}
  </NativeDirectionalScrollView>
);
