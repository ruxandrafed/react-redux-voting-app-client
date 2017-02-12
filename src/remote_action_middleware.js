export default socket => store => next => action => {
//  console.log('in middleware', action);
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}

//export default function(store) {
//  return function(next) {
//    return function(action) {
//
//    }
//  }
//}

/* This style of nesting single-argument functions is
called currying. With the curried version we can call the
outermost function once, and get a return value that
"remembers" which store to use. */