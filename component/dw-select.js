var scripts = document.getElementsByTagName("script");
var urlBase = scripts[scripts.length-1].src;
urlBase = urlBase.replace('dw-select.js', '');

// dwFilter
(function( $ ){
  "use strict"

  // Public methods
  let api = {
    init : function(options) {
      const $el = $(this);
      // deploy component structure
      let deployment = new Promise(function(resolve, reject){
        methods.deployComponent($el, options);
        resolve()
      })
      deployment.then(function(){
        methods.getTemplate($el, options);
      })
    },
    destroy: function(){
    },
    val: function($el){
    }
  }

  // Private methods
  let methods = {
    deployComponent: function($el, options){
      // convert the div into a dw-filter component
      $el.addClass('dw-select');
    },

    getTemplate: function($el, options){

      $.get(urlBase + "templates/dw-select.html", function( result ) {
        let templateContent = result;
        methods.setTemplate($el, templateContent, options)
      });

    },

    setTemplate : function($el, templateContent, options){

      let template = _.template(templateContent);
      $el.html( template({
        placeholder: options.placeholder
      }) );

      if (typeof options !== 'undefined') {
        methods.optionTemplate($el, options)
      } // Todo: falta cuando no trae contenido - $('#sample1').dwSelect()

    },
    optionTemplate: function($el, options){

      let data = options.data[0];

      // If has groups, paint groups containers
      if( data.hasOwnProperty('group') ){
        // define groups
        let groups =  _.chain(options.data).flatten().pluck('group').flatten().unique().value();

        // paint groups containers
        _.each(groups, function(group){
          $el.find('content > .options').append('<div class="group" id="' + group + '"><div class="title"><span class="name">' + group + '</span><span class="open"></span></div></div><div class="group-content ' + group + '"></div>')
        })

        // put options into its group
        $.get(urlBase + "templates/options.html", function( result ) {
            let template = _.template(result);

            // options each
            options['data'].forEach(data => {
              let contentHtml = template({
                id: data['id'],
                primary: data['primary'],
                secundary: data['secundary'],
                selected: data['selected']
              });
              // paint in specific group content
              let group = data['group'];
              $el.find('.' + group + '.group-content').append(contentHtml);
            });
          });

      }else{
        // no groups
      }


      // $.get(urlBase + "templates/groups.html", function( result ) {
      //     let template = _.template(result);
      //     // groups each
      //
      //     // options each
      //     options['data'].forEach(data => {
      //       // let contentHtml = template({
      //       //   key: data[key],
      //       //   value: data[value]
      //       // });
      //       // $el.find('.dw-options').append(contentHtml);
      //     });

    },
    nogroupTemplate: function($el, options){
      // template = "templates/nogroups.html"

    }

  }

  // Events
    var events = {
      start: function($el, options){
      },
      toggleContent: function($el, options){
      },
      onSearch: function($el, options){
      },
      checkboxes: function($el){
      },
      selectChain: function($el){
      }
    };


  // jquery component stuff
  $.fn.dwSelect = function(methodOrOptions) {
      if ( api[methodOrOptions] ) {
          return api[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ))
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
          // Default to "init"
          return api.init.apply( this, arguments )
      } else {
          $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.dwSelect' )
      }
  };


})( jQuery )
