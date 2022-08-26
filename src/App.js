import './App.css';
import React, { useRef, useEffect } from 'react';


const App = () => {
  const ref = useRef(null);
  const mounted = useRef(false);
  useEffect (() => {
    const sdk = ref.current
    const showcaseWindow = sdk.contentWindow;
    sdk.addEventListener('load', async function() {
      let sdk;
      try {

         
        sdk = await showcaseWindow.MP_SDK.connect(showcaseWindow);
        // sdk.App.state.subscribe(function (appState) {
        //   // app state has changed
        //   console.log('The current application: ', appState.application);
        //   console.log('The current phase: ', appState.phase);
        //   console.log('Loaded at time ', appState.phaseTimes[sdk.App.Phase.LOADING]);
        //   console.log('Started at time ', appState.phaseTimes[sdk.App.Phase.STARTING]);
        //  });
        //  console.log(sdk.App.state);
        if ( mounted.current )
        {
          //console.log(sdk.App.state);

      function DFactory() {
        this.inputs = {
          visible: false,
         // cssRenderer: null
        };
     
        this.onInit = function() {
          var THREE = this.context.three;
           if (this.context.cssRenderer==null) 
           {

            console.log('creating CSS3D Renderer')
             var domElement=this.context.renderer.domElement;

             this.context.cssRenderer=new THREE.CSS3DRenderer({ alpha: true });
             this.context.cssRenderer.setSize( window.innerWidth, window.innerHeight );

             this.context.cssRenderer.domElement.style.position = 'absolute';

             this.context.cssRenderer.domElement.style.pointerEvents='none';
             this.context.cssRenderer.domElement.id = 'css3d';
             domElement.parentElement.appendChild(this.context.cssRenderer.domElement);
             this.context.cssRendererBuffer = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});
 

           }

         var xx= document.createElement("iframe");

         xx.src=process.env.PUBLIC_URL + '/website/genially.html';

          xx.onload=function () { console.log('loaded iframe');};

          xx.style.background = new THREE.Color(Math.random() * 0xffffff).getStyle();
          var object = new THREE.CSS3DObject( xx );

          
          object.rotateY(THREE.Math.degToRad(90));

          object.position.x = -550;
          object.position.y = 70;
          object.position.z = -200;

          var scene2=new THREE.Scene();
          scene2.add(object);
    

          var group=new THREE.Group();
          group.add(scene2);

          this.outputs.objectRoot = group;
    
    
        };
     
        this.onEvent = function(type, data) {
        }
     
        this.onInputsUpdated = function(previous) {
        };
     
        this.onTick = function(tickDelta) {
         //this.context.cssRenderer.render(this.outputs.objectRoot, this.context.camera,this.context.cssRendererBuffer);
         this.context.cssRenderer.render(this.outputs.objectRoot, this.context.camera);        
        }
     
        this.onDestroy = function() {
          this.material.dispose();
        };
     };
     function OFactory() {
      this.inputs = {
        visible: false,
      };
   
      this.onInit = function() {
        var THREE = this.context.three;
          this.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
           // wireframe: true,
           // wireframeLinewidth: 1,
           // side: THREE.DoubleSide,
            map:this.context.cssRendererBuffer
          });
          const geometry = new THREE.PlaneGeometry(100, 100);
          const mesh = new THREE.Mesh(geometry, this.material);

          this.outputs.objectRoot = mesh;
    
    
        };
     
        this.onEvent = function(type, data) {
        }
     
        this.onInputsUpdated = function(previous) {
        };
     
        this.onTick = function(tickDelta) {
         //this.context.cssRenderer.render(this.outputs.objectRoot, this.context.camera,this.context.cssRendererBuffer);
        }
     
        this.onDestroy = function() {
          this.material.dispose();
        };
     };

     function YFactory() {
        return new DFactory();
     };
     
     function cOFactory() {
      return new OFactory();
   };
       // Registering the component with the sdk
       sdk.Scene.register('box', YFactory);
       sdk.Scene.createNode().then(function(node) {
        node.addComponent('box');     
        node.position.set(0, 1, 0);
        //node.quaternion.set(0, -1, 0, 0);
        node.scale.set(.012, .012, 0.012);
        node.start();
     });
  //    sdk.Scene.register('obox', cOFactory);
  //    sdk.Scene.createNode().then(function(node) {
  //     node.addComponent('obox');     
  //     node.position.set(0, 1, 0);
  //     //node.quaternion.set(0, -1, 0, 0);
  //     node.scale.set(.01, .01, .01);
  //     node.start();
  //  });
        } else { mounted.current = true;}
      }
      catch(e) {
        console.error(e);
        return;
      }
    });
    
    //TODO: add some more actions using sdk. E.g. sdk.Scene()...
    
  }, []);

  return (
    <div className="App">
        <iframe 
            ref={ref}
            src="/mp-sdk/3.1.63/showcase.html?m=gUr9K6pRUWt&applicationKey=295ba0c0f04541318359a8e75af33043&play=1"
            frameBorder="0"
            allowFullScreen allow="vr"  title="showc" >
        </iframe>
  
 
    </div>
  );
}

export default App;
